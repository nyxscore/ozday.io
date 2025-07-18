// detail.js (포스트 상세 화면용 JavaScript with 캐싱)
const apiUrl = "https://jsonplaceholder.typicode.com";

// URL에서 postId 추출
function getPostIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get("postId");
}

// 포스트 데이터를 가져오고 표시
async function displayPost() {
  const postId = getPostIdFromURL();
  if (!postId) {
    console.error("Error: postId not found in URL");
    return;
  }

  const cacheKey = `post_${postId}`;
  const cached = localStorage.getItem(cacheKey);

  if (cached) {
    try {
      const { data, timestamp } = JSON.parse(cached);
      const now = Date.now();
      if (now - timestamp < 5 * 60 * 1000) {
        document.getElementById("post-title").textContent = data.title;
        document.getElementById("post-body").textContent = data.body;
        console.log("Post loaded from localStorage");
        return;
      }
    } catch (e) {
      console.error("Error: Failed to parse cached data");
    }
  }

  try {
    const response = await fetch(`${apiUrl}/posts/${postId}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    const post = await response.json();

    document.getElementById("post-title").textContent = post.title;
    document.getElementById("post-body").textContent = post.body;

    const cacheValue = {
      data: post,
      timestamp: Date.now(),
    };
    localStorage.setItem(cacheKey, JSON.stringify(cacheValue));
    console.log("Post fetched from API");
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// 페이지 로드 시 포스트 표시
displayPost();
