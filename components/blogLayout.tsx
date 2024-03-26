import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Prism from 'prismjs';
import 'prismjs/components/prism-scss.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/themes/prism.css';
import { AiFillCaretLeft } from 'react-icons/ai';
import posts from '@data/posts';
import Grid from '@components/grid';
import Layout from '@components/layout';

const convertDate = (d) =>
  d === '' ? 'No date' : `${new Date(d).getDate()}.${new Date(d).getMonth() + 1}.${new Date(d).getFullYear()}`;

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  useEffect(() => {
    Prism.highlightAll();
  }, [router]);

  const post = posts.find((p) => p.slug === router.asPath.replace('/blog/', ''));
  const { title, intro, img, published, modified, categories } = post;

  const categoriesList = categories?.split(', ').filter((x) => x);

  const nextLink = posts[posts.findIndex((x) => x.title === title) + 1] || posts[0];
  const previousLink = posts[posts.findIndex((x) => x.title === title) - 1] || posts[posts.length - 1];
  const relatedLinks = [previousLink, nextLink];

  return (
    <>
      <Layout title={`${title} | Blog | Rémy Beumier`} description={intro} itemtype="Article" {...post}>
        <div className="container narrow post-shape">
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
                <div>
                  <time
                    className="post__date"
                    itemProp="datePublished"
                    content={convertDate(published)}
                    dateTime={convertDate(published)}
                  >
                    Published on: {convertDate(published)}
                  </time>
                  <time
                    className="post__date"
                    itemProp="dateModified"
                    content={convertDate(modified)}
                    dateTime={convertDate(modified)}
                  >
                    Modified on: {convertDate(modified)}
                  </time>
                </div>
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
                <h2 className="mb-5">Suggested articles</h2>
                <Grid data={relatedLinks} className="mb-20" />
              </div>
            </article>
          </div>
        </div>
      </Layout>
    </>
  );
}
