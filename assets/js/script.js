function toggleSidebar() {
  const sidebar = document.getElementById("mobile-sidebar");
  const backdrop = document.getElementById("sidebar-backdrop");

  // Toggle the class that controls translation (position)
  sidebar.classList.toggle("sidebar-closed");
  sidebar.classList.toggle("sidebar-open");

  // Toggle backdrop visibility
  backdrop.classList.toggle("hidden");
}

function scrollList() {
  const container = document.getElementById("scroll-container");
  // Scroll down 200px smoothly
  container.scrollBy({
    top: 200,
    behavior: "smooth",
  });
}
function switchTab(tab) {
  const leftCol = document.getElementById("left-column");
  const rightCol = document.getElementById("right-column");
  const contentCorsi = document.getElementById("content-corsi");
  const contentStorico = document.getElementById("content-storico");

  const btnCorsi = document.getElementById("tab-corsi");
  const btnStorico = document.getElementById("tab-storico");
  const btnLead = document.getElementById("tab-leaderboard");

  const activeClass =
    "bg-[#00b4d8] text-white shadow-md transform active:scale-95".split(" ");
  const inactiveClass =
    "text-gray-400 hover:text-gray-600 hover:bg-gray-50".split(" ");

  [btnCorsi, btnStorico, btnLead].forEach((btn) => {
    btn.classList.remove(...activeClass);
    btn.classList.add(...inactiveClass);
  });

  if (tab === "corsi") {
    btnCorsi.classList.remove(...inactiveClass);
    btnCorsi.classList.add(...activeClass);

    // Mobile Logic: Mostra sinistra, nascondi destra
    leftCol.classList.remove("hidden");
    rightCol.classList.add("hidden");
    rightCol.classList.add("lg:block"); // Importante per desktop

    contentCorsi.classList.remove("hidden");
    contentStorico.classList.add("hidden");
  } else if (tab === "storico") {
    btnStorico.classList.remove(...inactiveClass);
    btnStorico.classList.add(...activeClass);

    leftCol.classList.remove("hidden");
    rightCol.classList.add("hidden");
    rightCol.classList.add("lg:block");

    contentCorsi.classList.add("hidden");
    contentStorico.classList.remove("hidden");
  } else if (tab === "leaderboard") {
    btnLead.classList.remove(...inactiveClass);
    btnLead.classList.add(...activeClass);

    // Mobile Logic: Nascondi sinistra, mostra destra a schermo intero
    leftCol.classList.add("hidden");
    rightCol.classList.remove("hidden");
    rightCol.classList.add("flex"); // Assicura che usi flexbox per l'altezza
  }
}
