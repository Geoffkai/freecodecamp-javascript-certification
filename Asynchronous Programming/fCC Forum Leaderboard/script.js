const forumLatest =
  "https://cdn.freecodecamp.org/curriculum/forum-latest/latest.json";
const forumTopicUrl = "https://forum.freecodecamp.org/t/";
const forumCategoryUrl = "https://forum.freecodecamp.org/c/";
const avatarUrl = "https://cdn.freecodecamp.org/curriculum/forum-latest";

const allCategories = {
  299: { category: "Career Advice", className: "career" },
  409: { category: "Project Feedback", className: "feedback" },
  417: { category: "freeCodeCamp Support", className: "support" },
  421: { category: "JavaScript", className: "javascript" },
  423: { category: "HTML - CSS", className: "html-css" },
  424: { category: "Python", className: "python" },
  432: { category: "You Can Do This!", className: "motivation" },
  560: { category: "Back-End Development", className: "backend" },
};

function timeAgo(timestamp) {
  const diff = Date.now() - new Date(timestamp).getTime();
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (minutes < 60) {
    return `${minutes}m ago`;
  } else if (hours < 24) {
    return `${hours}h ago`;
  } else {
    return `${days}d ago`;
  }
}

const viewCount = (views) =>
  views >= 1000 ? `${Math.floor(views / 1000)}k` : views;

const forumCategory = (categoryId) => {
  const selected = Object.hasOwn(allCategories, categoryId)
    ? allCategories[categoryId]
    : { category: "General", className: "general" };

  const { category, className } = selected;

  return `<a class="category ${className}" href="${forumCategoryUrl}${className}/${categoryId}">${category}</a>`;
};

const avatars = (posters, users) => {
  return posters
    .map((poster) => {
      const user = users.find((u) => u.id === poster.user_id);
      let src = user.avatar_template.replace("{size}", "30");
      if (src.startsWith("/")) {
        src = avatarUrl + src;
      }
      return `<img src="${src}" alt="${user.name}">`;
    })
    .join("");
};

function showLatestPosts(obj) {
  const users = obj.users;
  const topicList = obj.topic_list;

  const posts = topicList.topics
    .map((topic) => {
      const {
        id,
        title,
        slug,
        posts_count,
        views,
        bumped_at,
        category_id,
        posters,
      } = topic;

      return `
    <tr>
      <td>
        <a class="post-title" href="${forumTopicUrl}${slug}/${id}">${title}</a>${forumCategory(category_id)}
      </td>
      <td>
        <div class="avatar-container">${avatars(posters, users)}</div>
      </td>
      <td>${posts_count - 1}</td>
      <td>${views}</td>
      <td>${timeAgo(bumped_at)}</td>
    </tr>`;
    })
    .join("");

  document.getElementById("posts-container").innerHTML = posts;
}

async function fetchData() {
  try {
    const res = await fetch(forumLatest);
    const data = await res.json();
    showLatestPosts(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData();
