/* =========================================================
   NAVBAR MOBILE
========================================================= */

function toggleMenu() {
    const nav = document.querySelector(".nav-links");

    if (nav) {
        nav.classList.toggle("active");
    }
}


/* =========================================================
   TUTUP MENU SETELAH KLIK NAVIGASI
========================================================= */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        const nav = document.querySelector(".nav-links");

        if (nav) {
            nav.classList.remove("active");
        }

    });

});


/* =========================================================
   FILTER ANGGOTA
========================================================= */

function filterMembers(jurusan, button) {

    const members = document.querySelectorAll(".member-card");
    const buttons = document.querySelectorAll(".filter-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    if (button) {
        button.classList.add("active");
    }

    members.forEach(member => {

        const memberJurusan = member.dataset.jurusan;

        if (jurusan === "all" || memberJurusan === jurusan) {

            member.style.display = "";

            setTimeout(() => {
                member.style.opacity = "1";
                member.style.transform = "translateY(0)";
            }, 20);

        } else {

            member.style.opacity = "0";
            member.style.transform = "translateY(10px)";

            setTimeout(() => {
                member.style.display = "none";
            }, 200);

        }

    });

}


/* =========================================================
   MEMBER PROFILE MODAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const memberCards = document.querySelectorAll(".member-card");
    const modal = document.querySelector(".member-modal");

    /* Kalau modal belum ada, jangan jalankan bagian ini */
    if (!modal) {
        console.warn("Member modal belum ditemukan di HTML.");
        return;
    }


    /* =====================================================
       ELEMENT MODAL
    ===================================================== */

    const modalImage = modal.querySelector(".modal-photo img");
    const modalName = modal.querySelector(".modal-name");
    const modalJurusan = modal.querySelector(".modal-jurusan");
    const modalProgram = modal.querySelector(".modal-program");
    const closeButton = modal.querySelector(".modal-close");


    /* =====================================================
       KLIK KARTU ANGGOTA
    ===================================================== */

    memberCards.forEach(card => {

        card.addEventListener("click", () => {

            const image = card.querySelector(".member-photo img");
            const name = card.querySelector(".member-info h3");
            const jurusan = card.querySelector(".member-class");
            const program = card.querySelector(".member-info p");


            /* Foto */

            if (image && modalImage) {
                modalImage.src = image.src;
                modalImage.alt = image.alt;
            }


            /* Nama */

            if (name && modalName) {
                modalName.textContent =
                    name.textContent.trim();
            }


            /* Jurusan */

            if (jurusan && modalJurusan) {
                modalJurusan.textContent =
                    jurusan.textContent.trim();
            }


            /* Program */

            if (program && modalProgram) {
                modalProgram.textContent =
                    program.textContent.trim();
            }


            /* Tampilkan modal */

            modal.classList.add("active");

            document.body.style.overflow = "hidden";

        });

    });


    /* =====================================================
       TUTUP MODAL
    ===================================================== */

    function closeModal() {

        modal.classList.remove("active");

        document.body.style.overflow = "";

    }


    /* Tombol X */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }


    /* Klik area luar modal */

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            closeModal();
        }

    });


    /* Tombol ESC */

    document.addEventListener("keydown", event => {

        if (event.key === "Escape") {
            closeModal();
        }

    });

});


/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   PROTEKSI GAMBAR YANG BELUM ADA
========================================================= */

document.querySelectorAll("img").forEach(img => {

    img.addEventListener("error", () => {

        /*
         * Jangan menghilangkan gambar member
         * supaya kartu tetap memiliki area foto.
         */

        if (img.closest(".member-photo")) {
            return;
        }

        img.style.display = "none";

    });

});