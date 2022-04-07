import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import { getPostBySlug, getAllPosts } from '@api';
import Layout from '@components/layout';

export default function DynamicBlogPost({ data, posts, title, description, img, url }) {
  const router = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  const date =
    data.date === ''
      ? 'No date'
      : `${new Date(data.date).getDate()}.${new Date(data.date).getMonth() + 1}.${new Date(data.date).getFullYear()}`;

  const categories = data.categories?.split(', ').filter((x) => x);

  const nextLink = posts[posts.findIndex((x) => x.title === data.title) + 1]?.link || posts[0].link;

  return (
    <Layout title={`${title} | Blog | Rémy Beumier`} description={description} img={img} url={url} itemtype="Article">
      <div className="container narrow posts-shape">
        <div data-aos="fade-left">
          <article>
            <h1 itemProp="headline name">{data.title}</h1>
            <img src={data.img} alt={data.title} width="300" height="150" className="post__img mb-5" itemProp="image" />
            <div className="space-between-x pb-5">
              <div className="post__categories">
                {categories?.map((c) => (
                  <Link key={c} href={`/blog?${c}`}>
                    <a>
                      <span itemProp="articleSection">{c.charAt(0).toUpperCase() + c.slice(1)}</span>
                    </a>
                  </Link>
                ))}
              </div>
              {/* TODO: add dateModified */}
              <p className="post__date" itemProp="datePublished" content={data.date}>
                {date}
              </p>
            </div>
            <div
              className="post__content mt-5 mb-10"
              dangerouslySetInnerHTML={{ __html: data.content }}
              itemProp="articleBody"
            />
            {/* TODO: add previous post link */}
            <div className="mb-16">
              <Link href={nextLink}>
                <a className="btn mb-4 mr-4">Next blog post</a>
              </Link>
              <Link href="/blog">
                <a className="btn">Back to blog listing</a>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </Layout>
  );
}

DynamicBlogPost.defaultProps = {
  title: 'Blog | Rémy Beumier',
};

DynamicBlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  posts: PropTypes.array,
  description: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  data: PropTypes.object,
};

export async function getStaticProps(context) {
  const next = await getAllPosts();
  const data = await getPostBySlug(context.params.slug);
  return {
    props: {
      posts: next,
      data: await getPostBySlug(context.params.slug),
      title: data.title,
      description: data.intro,
      img: data.img,
      url: `https://remybeumier.be/blog/${context.params.slug}`,
    },
  };
}

export async function getStaticPaths() {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
