function toggleBookmark(event) {
  const bookmarkIcon = event.currentTarget.querySelector(".bookmark-icon");
  bookmarkIcon.classList.toggle("clicked");
  // Hier kannst du den Code hinzufügen, um das Lesezeichen in deiner Bookmark HTML zu speichern
}
