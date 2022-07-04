import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
// import { getPostBySlug, getAllPosts } from '@api';
import { getPost, getPosts } from '@api';
import Layout from '@components/layout';

export default function DynamicBlogPost({ data, posts, content, title, description, img, url, date, categories }) {
  const router = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  const processedDate =
    date === ''
      ? 'No date'
      : `${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`;

  const categoriesList = categories?.split(', ').filter((x) => x);

  const nextLink = posts[posts.findIndex((x) => x.title === title) + 1]?.link || posts[0].link;

  return (
    <Layout title={`${title} | Blog | Rémy Beumier`} description={description} img={img} url={url} itemtype="Article">
      <div className="container narrow posts-shape">
        <div data-aos="fade-left">
          <article>
            <h1 itemProp="headline name">{title}</h1>
            <img src={img} alt={title} width="300" height="150" className="post__img mb-5" itemProp="image" />
            <div className="space-between-x pb-5">
              <div className="post__categories">
                {categoriesList?.map((c) => (
                  <Link key={c} href={`/blog?${c}`}>
                    <a>
                      <span itemProp="articleSection">{c.charAt(0).toUpperCase() + c.slice(1)}</span>
                    </a>
                  </Link>
                ))}
              </div>
              {/* TODO: add dateModified */}
              <p className="post__date" itemProp="datePublished" content={processedDate}>
                {processedDate}
              </p>
            </div>
            <div
              className="post__content mt-5 mb-10"
              dangerouslySetInnerHTML={{ __html: content }}
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
  content: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
  date: PropTypes.string,
  categories: PropTypes.any,
  data: PropTypes.object,
};

export async function getStaticProps(context) {
  // const next = await getAllPosts();
  const next = await getPosts();
  // const data = await getPostBySlug(context.params.slug);
  const data = await getPost(context.params.slug);
  return {
    props: {
      posts: next,
      data: data,
      content: data.content,
      title: data.title,
      description: data.intro,
      img: data.img,
      url: `https://remybeumier.be/blog/${context.params.slug}`,
      date: data.date,
      categories: data.categories,
    },
  };
}

export async function getStaticPaths() {
  // let paths = await getAllPosts();
  let paths = await getPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
