import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/themes/prism.css';
import { getPost, getPosts } from '@api';
import Layout from '@components/layout';
import Grid from '@components/grid';
import { AiFillCaretLeft } from 'react-icons/ai';

export default function DynamicBlogPost({ posts, content, title, description, img, url, date, categories }) {
  const router = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  const processedDate =
    date === ''
      ? 'No date'
      : `${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`;

  const categoriesList = categories?.split(', ').filter((x) => x);

  const nextLink = posts[posts.findIndex((x) => x.title === title) + 1] || posts[0];
  const previousLink = posts[posts.findIndex((x) => x.title === title) - 1] || posts[posts.length - 1];
  const relatedLinks = [previousLink, nextLink];

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
              <time className="post__date" itemProp="datePublished" content={processedDate} dateTime={processedDate}>
                {processedDate}
              </time>
            </div>

            <div
              className="post__content mt-5 mb-10"
              dangerouslySetInnerHTML={{ __html: content }}
              itemProp="articleBody"
            />

            <div className="pt-4 mb-16">
              <Link href="/blog">
                <a className="btn">
                  <AiFillCaretLeft className="mr-1" />
                  Back to blog listing
                </a>
              </Link>
            </div>

            <div>
              <p className="related-title">Suggested articles</p>
              <Grid data={relatedLinks} className="mt-6 mb-20" />
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
};

export async function getStaticProps(context) {
  const next = await getPosts();
  const data = await getPost(context.params.slug);
  return {
    props: {
      posts: next,
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
  let paths = await getPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}
