export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-flex">
          <div className="footer-item">
            <h3 className="footer-title">PIZZA HOUSE</h3>
            <p>
              <a>Правовая информация</a>
            </p>
            <p>
              <a>Калорийность и состав</a>
            </p>
            <p>
              <a>Помощь</a>
            </p>
          </div>
          <div>
            <ul className="socials">
              <li>
                <a>
                  <img src="../../../public/img/footer/fb.svg" />
                </a>
              </li>
              <li>
                <a>
                  <img src="../../../public/img/footer/ok.svg" />
                </a>
              </li>
              <li>
                <a>
                  <img src="../../../public/img/footer/inst.svg" />
                </a>
              </li>
              <li>
                <a>
                  <img src="../../../public/img/footer/vk.svg" />
                </a>
              </li>
              <li>
                <a>
                  <img src="../../../public/img/footer/youtube.svg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
