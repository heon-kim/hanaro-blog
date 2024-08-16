class Post {
  constructor(title, date, author, content) {
    this.title = title;
    this.date = date;
    this.author = author;
    this.content = content;
  }
}

const post1 = new Post(
  "네이버 지도(v5) 임베드",
  "2024-12-17",
  "김채운",
  "111Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
);
const post2 = new Post(
  "제목",
  "2024-12-16",
  "김해원",
  "222Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
);
const post3 = new Post(
  "구글 지도 게시물에 임베드 하기",
  "2024-12-16",
  "박시홍",
  "333Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
);
const post4 = new Post(
  "아이폰 7 플러스",
  "2024-05-14",
  "박지환",
  "444Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa autem eius illum earum excepturi asperiores fuga ratione, ipsam repudiandae tenetur repellat cupiditate inventore odio quasi accusantium enim aut necessitatibus laudantium."
);

let activePostId;
const posts = { post1, post2, post3, post4 };

window.onload = () => {
  // 페이지 로드 시 게시글 목록 초기화
  updateList();
};

function updateList() {
  // 게시글 목록 업데이트
  Object.keys(posts).forEach((postId, index) => {
    document.getElementById(postId).innerHTML = `
    <th scope="row">${index + 1}</th>
    <td>${posts[postId].title}</td>
    <td>${posts[postId].author}</td>
    <td>${posts[postId].date}</td>
  `;
  });
}

function showViewSection(postId) {
  // 게시글 클릭 시 이벤트
  if (activePostId) {
    document.getElementById(activePostId).classList.remove("table-active");
  }
  activePostId = postId;
  document.getElementById(postId).classList.add("table-active");
  document.getElementById("view-section").classList.remove("hidden");
  document.getElementById("post-title").innerText = posts[postId].title;
  document.getElementById("post-date").innerText = posts[postId].date;
  document.getElementById("post-author").innerText = posts[postId].author;
  document.getElementById("post-content").innerText = posts[postId].content;
}

function populateEditModal() {
  const title = document.getElementById("post-title").innerText;
  const content = document.getElementById("post-content").innerText;

  document.getElementById("edit-title").value = title;
  document.getElementById("edit-content").value = content;
}

function deletePost() {
  // 삭제 로직 추가
  document.getElementById("view-section").classList.add("hidden");
  document.getElementById(activePostId).innerHTML = "";
  delete posts[activePostId];
  alert("게시글이 삭제되었습니다.");
  updateList();
}

function saveChanges() {
  // 저장 로직 추가
  const newTitle = document.getElementById("edit-title").value;
  const newContent = document.getElementById("edit-content").value;

  document.getElementById("post-title").innerText = newTitle;
  document.getElementById("post-content").innerText = newContent;

  posts[activePostId].title = newTitle;
  posts[activePostId].content = newContent;

  alert("변경 사항이 저장되었습니다.");
}
