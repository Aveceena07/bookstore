import React from "react";
function Novel() {
  return (
    <div className="container">
      <div className="anjai mt-3">
        <h1 style={{ textAlign: "center" }}>NOVEL</h1>
      </div>
      {/* baris 1 */}
      <div className="row py-5">
        <div className="card col-3">
          <img
            src="https://cdn.gramedia.com/uploads/items/9786020639512_selena_cov.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Selena</h5>
            <p className="card-text">
              Selena adalah sebuah novel karya Tere Liye, novel ini adalah
              bagian kedelapan dari seri Bumi/serial Dunia Paralel. Diterbitkan
              pertama kali oleh Gramedia Pustaka Utama tahun 2020.
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
                      Modal title
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
            src="https://upload.wikimedia.org/wikipedia/id/4/49/Bumi_%28sampul%29.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bumi</h5>
            <p className="card-text">
              Bumi adalah sebuah novel karya Tere Liye, novel ini juga adalah
              bagian pertama dari seri Bumi serial Dunia Paralel. Diterbitkan
              pertama kali oleh Gramedia Pustaka Utama tahun 2014.
            </p>
            <a href="#" className="btn btn-primary mt-4">
              Beli Sekarang
            </a>
          </div>
        </div>
        <div className="card col-3">
          <img
            src="https://cdn.gramedia.com/uploads/items/9786020332949_Bulan-New-Cover.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Bulan</h5>
            <p className="card-text">
              Bulan adalah sebuah novel karya Tere Liye, novel ini adalah bagian
              kedua dari seri Bumi/serial Dunia Paralel. Diterbitkan pertama
              kali oleh Gramedia Pustaka Utama tahun 2015.
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
                      Modal title
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
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1522226221l/39668868._SX318_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Hujan</h5>
            <p className="card-text">
              Novel ini adalah naskah awal dari penulis tanpa sentuhan editing,
              layout serta cover dari penerbit, dengan demikian, naskah ini
              berbeda dengan versi cetak, pun memiliki kelebihan dan kelemahan.
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
                      Modal title
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
            src="http://assets.kompasiana.com/items/album/2021/03/12/pulang-604a532ed541df675f6f2592.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Pulang</b>
            </h5>
            <p className="card-text">
              Novel Pulang menceritakan tentang kisah hidup Bujang, seorang anak
              desa sederhana yang dibawa ke kota untuk diasuh oleh Tauke Muda
              dan keluarga Tong.
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
                      Modal title
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
            src="http://assets.kompasiana.com/items/album/2018/08/18/14ce416308240e90767f9eed91930d1f2bc21207-1-5b784869bde5753b1a0246f2.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Pergi</b>
            </h5>
            <p className="card-text">
              Sebuah kisah tentang menemukan tujuan, ke mana hendak pergi,
              melalui kenangan demi kenangan masa lalu, pertarungan hidup-mati,
              untuk memutuskan ke mana langkah kaki akan dibawa.
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
                      Modal title
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
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1622301169l/58194191._SY475_.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Rindu</b>
            </h5>
            <p className="card-text">
              Kisah tentang masa lalu yang memilukan. Tentang kebencian kepada
              seseorang yang seharusnya disayangi. Tentang kehilangan kekasih
              hati. Tentang cinta sejati. Tentang kemunafikan.
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
                      Modal title
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
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1475659479l/32467509.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              <b>Tentang kamu</b>
            </h5>
            <p className="card-text">
              Tentang Kamu adalah sebuah novel perjalanan hidup karya Tere Liye,
              Diterbitkan pertama kali tahun 2016. Tentang kamu adalah sebuah
              novel yang menceritakan perjuangan Zaman.
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
                      Modal title
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

export default Novel;
