import React from "react";

import Default from "../templates/Default";

import user1 from "../../images/placeholders/user-1.jpg";
import post1 from "../../images/placeholders/post-1.jpg";
import post2 from "../../images/placeholders/post-2.jpg";
import post3 from "../../images/placeholders/post-3.jpg";

export default function UserBlog() {
  return (
    <Default>
      <div className="user-blog">
        <div className="user-blog__header">
          <div className="user-blog__header-photo">
            <img src={user1} className="responsive avatar" alt="" />
          </div>
          <h1 className="user-blog__header-title">Chris Hudson</h1>
          <p className="user-blog__header-bio">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div className="user-blog__posts">
          <a href="#" className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <img src={post1} className="responsive" alt="" />
            </div>
            <h2 className="user-blog__posts-item-title">
              Usando React como SPA
            </h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
          </a>
          <a href="#" className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <img src={post2} className="responsive" alt="" />
            </div>
            <h2 className="user-blog__posts-item-title">Você conhece o JSX?</h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
          </a>
          <a href="#" className="user-blog__posts-item">
            <div className="user-blog__posts-item-photo">
              <img src={post3} className="responsive" alt="" />
            </div>
            <h2 className="user-blog__posts-item-title">
              SSG, SPA e SSR: Qual usar?
            </h2>
            <div className="user-blog__posts-date">Publicado em 14/06/2022</div>
          </a>
        </div>
      </div>
    </Default>
  );
}
