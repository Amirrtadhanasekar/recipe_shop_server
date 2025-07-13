import React from 'react';
import '../css/Blog.css'

const Blog = () => {
  const blogPosts = [
    {
      title: "Carrot Cake, Croissant & Kunafa Cheesecake Magic! 2025",
      date: "May 17, 2025",
      summary:
        "From timeless bakes to trendy treats, 2025 is all about flavourful nostalgia and bold innovation. Indulge in three iconic desserts that have stood the test of time—Carrot Cake, Croissant, and Kunafa Cheesecake!",
      link: "https://www.monginis.net/blog/carrot-cake-croissant-kunafa-cheesecake-magic-2025/",
    },
    {
      title: "A Mother’s Day Cake That Speaks from the Heart! 2025",
      date: "May 10, 2025",
      summary:
        "Celebrate Mother's Day with a cake that captures the essence of everything you feel, making the moment truly special.",
      link: "https://www.monginis.net/blog/a-mothers-day-cake-that-speaks-from-the-heart-2025/",
    },
    {
      title: "Summer’s Sweetest Escape: Ice Cream Cake! 2025",
      date: "May 3, 2025",
      summary:
        "Beat the heat with Monginis' Ice Cream Cake—a delightful fusion of cake and ice cream perfect for summer celebrations.",
      link: "https://www.monginis.net/blog/summers-sweetest-escape-ice-cream-cake-2025/",
    },
    {
      title: "Turning 25? Celebrate with a Dreamy Birthday Cake!",
      date: "April 4, 2025",
      summary:
        "Mark your 25th birthday milestone with a dreamy cake from Monginis, blending youthful energy with grown-up elegance.",
      link: "https://www.monginis.net/blog/turning-25-celebrate-with-a-dreamy-birthday-cake/",
    },
    {
      title: "Sweeten your Gudi Padwa celebrations!",
      date: "March 25, 2025",
      summary:
        "Welcome the Maharashtrian New Year with Monginis' delightful Gudi Padwa cakes, bringing a festive touch to your celebrations.",
      link: "https://www.monginis.net/blog/sweeten-your-gudi-padwa-celebrations/",
    },
    {
      title: "Colours, Cakes, & Celebrations: Happy Holi! 2025",
      date: "March 13, 2025",
      summary:
        "Celebrate Holi 2025 with Monginis' special Holi cake, adding sweetness and color to your festive moments.",
      link: "https://www.monginis.net/blog/colours-cakes-celebrations-happy-holi-2025/",
    },
  ];

  return (
    <section className="blog-section">
      <div className="blog-container">
        <h2 className="blog-title">Latest from LULU Shop</h2>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <div className="blog-card" key={index}>
              <h3 className="blog-post-title">{post.title}</h3>
              <p className="blog-date">{post.date}</p>
              <p className="blog-summary">{post.summary}</p>
              <a href={post.link} className="blog-read-more" target="_blank" rel="noopener noreferrer">
                Read More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
