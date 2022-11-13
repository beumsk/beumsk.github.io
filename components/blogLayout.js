import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/themes/prism.css';
import { AiFillCaretLeft } from 'react-icons/ai';
import { posts } from '@data/posts';
import Layout from '@components/layout';
import Grid from '@components/grid';

export default function BlogLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  const post = posts.filter((p) => p.slug === router.asPath.replace('/blog/', ''));
  const { title, intro, img, date, categories, url } = post[0];

  const processedDate =
    date === ''
      ? 'No date'
      : `${new Date(date).getDate()}.${new Date(date).getMonth() + 1}.${new Date(date).getFullYear()}`;

  const categoriesList = categories?.split(', ').filter((x) => x);

  const nextLink = posts[posts.findIndex((x) => x.title === title) + 1] || posts[0];
  const previousLink = posts[posts.findIndex((x) => x.title === title) - 1] || posts[posts.length - 1];
  const relatedLinks = [previousLink, nextLink];

  return (
    <>
      <Layout title={`${title} | Blog | Rémy Beumier`} description={intro} img={img} url={url} itemtype="Article">
        <div className="container narrow posts-shape">
          <div data-aos="fade-left">
            <article>
              <h1 itemProp="headline name">{title}</h1>
              <img src={img} alt={title} width="300" height="150" className="post__img mb-5" itemProp="image" />

              <div className="space-between-x mb-10">
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

              <div className="post__content mb-10" itemProp="articleBody">
                {children}
              </div>

              <div className="mb-15">
                <Link href="/blog">
                  <a className="btn">
                    <AiFillCaretLeft className="mr-1" />
                    Back to blog listing
                  </a>
                </Link>
              </div>

              <div>
                <p className="related-title mb-5">Suggested articles</p>
                <Grid data={relatedLinks} className="mb-20" />
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}

BlogLayout.propTypes = {
  meta: PropTypes.object,
  children: PropTypes.node,
  posts: PropTypes.array,
};
