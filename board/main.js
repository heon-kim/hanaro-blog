class Post {
  constructor(id, title, date, author, content) {
    this.id = id;
    this.title = title;
    this.date = date;
    this.author = author;
    this.content = content;
  }

  updateTitle(newTitle) {
    this.title = newTitle;
  }

  updateContent(newContent) {
    this.content = newContent;
  }

  getListItemHTML() {
    return `
      <tr id="${this.id}" onclick="showViewSection('${this.id}')">
        <th scope="row">${posts.indexOf(this) + 1}</th>
        <td>${this.title}</td>
        <td>${this.author}</td>
        <td>${this.date}</td>
      </tr>
    `;
  }

  getPostHTML() {
    return `  <h3 id="post-title">${this.title}</h3>
              <div id="post-info">
                <span style="font-size: 35px">👤</span>
                <div>
                  <span id="post-author">${this.author}</span>
                  <div id="post-info-detail">
                    <span id="post-date">${this.date}</span>
                    <span id="post-view">조회수 3</span>
                  </div>
                </div>
              </div>

              <p id="post-content">${this.content}</p>`;
  }
}

const posts = [
  new Post(
    "post1",
    "네이버 지도(v5) 임베드",
    "2024-12-17",
    "김채운",
    "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
  ),
  new Post(
    "post2",
    "제목",
    "2024-12-16",
    "김해원",
    "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
  ),
  new Post(
    "post3",
    "구글 지도 게시물에 임베드 하기",
    "2024-12-16",
    "박시홍",
    "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
  ),
  new Post(
    "post4",
    "아이폰 7 플러스",
    "2024-05-14",
    "박지환",
    "444Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
  ),
];

let activePostId = null;

window.onload = updateList;

function getElement(id) {
  return document.getElementById(id);
}

function updateList() {
  const listContainer = getElement("posts-list");
  listContainer.innerHTML = posts
    .map((post) => post.getListItemHTML())
    .join("");
}

function getPostById(postId) {
  return posts.find((post) => post.id === postId);
}

function showViewSection(postId) {
  if (activePostId) {
    getElement(activePostId).classList.remove("table-active");
  }

  activePostId = postId;
  const post = getPostById(postId);

  if (post) {
    getElement(postId).classList.add("table-active");
    getElement("post-body").innerText = post.getPostHTML();
    getElement("view-section").classList.remove("hidden");
  }
}

function populateEditModal() {
  if (!activePostId) return;

  const post = getPostById(activePostId);

  if (post) {
    getElement("edit-title").value = post.title;
    getElement("edit-content").value = post.content;
  }
}

function deletePost() {
  if (!activePostId) return;

  if (confirm("정말로 게시글을 삭제하시겠습니까?")) {
    getElement("view-section").classList.add("hidden");
    getElement(activePostId).remove();
    const postIndex = posts.findIndex((post) => post.id === activePostId);

    if (postIndex !== -1) {
      posts.splice(postIndex, 1);
      activePostId = null;
      alert("게시글이 삭제되었습니다.");
      updateList();
    }
  }
}

function saveChanges() {
  if (!activePostId) return;

  const newTitle = getElement("edit-title").value;
  const newContent = getElement("edit-content").value;

  const post = getPostById(activePostId);

  if (post) {
    post.updateTitle(newTitle);
    post.updateContent(newContent);

    getElement("post-title").innerText = newTitle;
    getElement("post-content").innerText = newContent;

    alert("변경 사항이 저장되었습니다.");
  }
}
