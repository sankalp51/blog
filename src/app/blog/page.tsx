import { posts } from "#site/content";
import PostItem from "@/components/PostItem";

export default async function page() {
  const displayPosts = posts;
  return (
    <section className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <article className="flex-1 space-y-4">
          <h1 className="inline-block font-black text-4xl lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            my ramblings on almost everything
          </p>
        </article>
      </div>
      {displayPosts?.length ? (
        <ul className="flex flex-col">
          {displayPosts.map((post) => (
            <li key={post.title}>
              <PostItem
                date={post.date}
                descripton={post.description}
                slug={post.slug}
                title={post.title}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>No posts aviliable</p>
      )}
      <hr className="mt-8" />
    </section>
  );
}
