import { BlogPosts } from "app/components/posts";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Welcome</h1>
      <p className="mb-4">
        Hi, I'm Drew! I'm a full stack software engineer with three years of industry experience. Please use the links above to see my resume and other interesting things. You can also use the links below to see my linkedin and github.
        {/* <br/><br/>
        Feel free to ignore the blog links below. Those are just there until I can get some better decorations. */}
      </p>
      {/* <div className="my-8">
        <BlogPosts />
      </div> */}
    </section>
  );
}
