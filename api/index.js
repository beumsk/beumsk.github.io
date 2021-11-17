import matter from 'gray-matter'
import marked from 'marked'

const defaultImage = 'https://via.placeholder.com/400x200';
// TODO: add description

export async function getAllPosts(){
    const context = require.context('../posts', false, /\.md$/)
    const posts = []
    for(const key of context.keys()){
        const post = key.slice(2);
        const fileContent = await import(`../posts/${post}`);
        const meta = matter(fileContent.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            intro: meta.data.intro || '',
            img: meta.data.img || defaultImage,
            link: '/blog/' + post.replace('.md',''),
        })
    }
    return posts;
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../posts/${slug}.md`)
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title,
        intro: meta.data.intro || '',
        img: meta.data.img || defaultImage,
        content: content
    }
}