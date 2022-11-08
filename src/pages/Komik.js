import React from "react";

function Komik() {
  return (
    <div className="container">
      {/* baris 1 */}
      <div className="row py-5">
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/9786024809928_JAGABUMI_01_-LEGENDA.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>SERI JAGABUMI</b>
            </h5>
            <p className="card-text">
              {" "}
              Menceritakan tentang Runtah, bocah laki-laki yang sering
              dikucilkan karena buta, namun ayah angkatnya tidak tinggal diam
              dan ingin mendidiknya menjadi kuat dan mampu melindungi diri
              sendiri.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/9786230300660.jpeg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>MY PRE-WEDDING</b>
            </h5>
            <p className="card-text">
              Cerita pasangan PNS dari dua kelurahan yang bersebelahan ini bikin
              semua pembaca ikut baper sendiri, karena kelakukan Adimas yang
              sweet banget ke Adelia.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/9786230304651_KOLONI_132X200mm_bookpaper_THEIR_STORY_OK_CMYK-1.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>THEIR STORY</b>
            </h5>
            <p className="card-text">
              Their Story yang mengisahkan tiga pasangan muda-mudi yang saling
              jatuh cinta ini terbit ke versi cetak.
            </p>
            <button
              type="button"
              class="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/9786026714671_SI_JUKI_SERIES_VOL_1_FA.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>SI JUKI</b>
            </h5>
            <p className="card-text">
              Berawal dari komik strip digital, akhirnya naik menjadi film
              animasi, dan ada banyak seri komik cetaknya. Si Juki, anak muda
              yang merasa dirinya gaul, paling beda, dengan raut wajah dan
              tingkah yang konyol.
            </p>
            <button
              type="button"
              class="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <br />
      {/* baris 2 */}
      <div className="row py-3">
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/cover_rev_si_unis_1--1-.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>SI UNIS</b>
            </h5>
            <p className="card-text">
              Habis yang kocak, sekarang beralih ke yang menggemaskan. Kita akan
              merasakan jadi kucing gembul berwarna abu bernama Unis. Komik ini
              akan menceritakan bagaimana kehidupan Unis dari sudut pandang si
              kucing itu sendiri.
            </p>
            <button
              type="button"
              class="btn btn-primary mt-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <div className="image">
            <img
              src="https://www.gramedia.com/blog/content/images/2021/08/Ghos.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <div className="kata">
              <h5 className="card-title">
                <b>GHOST PARADE</b>
              </h5>
              <p className="card-text">
                Ini tentang Suri, anak SD yang sepulang sekolah malah tersesat
                di hutan yang terkenal angker bernama Svaka. Hutan ini penuh
                keanekaragaman hewan dan tumbuhan.Walaupun di sana menemukan
                Tuyul dan Poci, Suri si anak pemberani malah bisa berteman.
              </p>
            </div>
            <button
              type="button"
              class="btn btn-primary mt-5"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/9786230024061_Garuda_Eleven_01--1-.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>GARUDA ELEVEN</b>
            </h5>
            <p className="card-text">
              Komik ini berlatarkan Sekolah Sepak Bola atau SSB Praja Garuda.
              SSB mempunyai kapten bernama Riga, yang setelah kekalahan tim, ia
              juga putus cinta, dan dihadapkan pada perceraian orang tuanya. Tak
              hanya itu, ia harus dihadapkan pada SSB yang juga mendadak
              ditutup.
            </p>
            <button
              type="button"
              class="btn btn-primary mt-4"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://www.gramedia.com/blog/content/images/2021/08/1--34-.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>SCRAMBLED</b>
            </h5>
            <p className="card-text">
              Komik ini mengisahkan tentang masa SMA yang penuh romansa, komedi,
              dan drama.Temanya lebih ke musik, tentang Filan yang baru saja
              pindah sekolah dan berniat membuat grup band baru. Ia dibantu oleh
              sepupunya, Visi, dan akhirnya mereka membuat band bernama{" "}
              <b>SCRAMBLED</b>.
            </p>
            <button
              type="button"
              class="btn btn-primary mt-1"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Beli Sekarang
            </button>
            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h1 class="modal-title fs-5" id="exampleModalLabel">
                      Pemberitahuan
                    </h1>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    Barang Berhasil DIpesan,Silahkan Tunggu Agar Barang Sampai
                    Dirumahmu:)
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Tutup
                    </button>
                    <button type="button" class="btn btn-primary">
                      Oke
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Komik;
