/* eslint-disable */

import React from "react";
import { Link } from "react-router-dom";
import HeaderNavLink from "components/HeaderNavLink";

function Header() {
  const headerMenuData = [
    {
      link: "/",
      classname: "fa-file-alt",
      title: "Документы",
    },
    {
      link: "/personal",
      classname: "fa-user-hard-hat",
      title: "Персонал",
    },
    {
      link: "/clients",
      classname: "fa-user-cowboy",
      title: "Клиенты",
    },
    {
      link: "/unavailable",
      classname: "fa-user-tie",
      title: "Поставщики",
    },
    {
      link: "/unavailable",
      classname: "fa-users",
      title: "Пользов.",
    },
    {
      link: "/",
      classname: "fa-poll-people",
      title: "Сделки",
    },
    {
      link: "/",
      classname: "fa-store",
      title: "Продажи",
    },
    {
      link: "/",
      classname: "fa-inventory",
      title: "Закупки",
    },
    {
      link: "/",
      classname: "fa-layer-group",
      title: "Произв.",
    },
    {
      link: "/",
      classname: "fa-analytics",
      title: "Отчеты",
    },
    {
      link: "/",
      classname: "fa-ruble-sign",
      title: "Финансы",
    },
  ];

  return (
    <header>
      <Link to="/" className="logo">
        <img src="/assets/img/logo.png" alt="" className="logo-default" />
        <img src="/assets/img/logo-short.png" alt="" className="logo-short" />
      </Link>
      <ul className="main-menu">
        {headerMenuData.map((el) => {
          return (
            <li>
              <HeaderNavLink
                link={el.link}
                title={el.title}
                classname={el.classname}
              />
            </li>
          );
        })}
      </ul>
      {}
      <ul className="side-menu ml-a">
        <li className="popup-parent">
          <a href="#">
            <i className="fal fa-search"></i>
          </a>
          <div className="popup popup-search">
            <form action="">
              <input
                type="text"
                placeholder="Искать документ, человека, прочее..."
              />
              <button type="submit">Найти</button>
            </form>
          </div>
        </li>
        <li className="popup-parent">
          <a href="#">
            <i className="fal fa-tools"></i>
          </a>
          <div className="popup popup-settings">
            <ul className="popup-menu">
              <li>
                <a href="#">
                  <i className="fal fa-paint-brush"></i>Персонализация
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-sliders-h"></i>Настройки личных кабинетов
                </a>
              </li>
              <li className="no-icon">
                <a href="#">Управление доступом</a>
              </li>
              <li className="no-icon">
                <a href="#">Роли в системе</a>
              </li>
              <div className="hr"></div>
              <li className="no-icon">
                <a href="#">Приложения к системе</a>
              </li>
              <li className="no-icon">
                <a href="#">Переменные для документов</a>
              </li>
              <div className="hr"></div>
              <li>
                <a href="#">
                  <i className="fal fa-cube"></i>Интеграция с 1С
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fal fa-exchange-alt"></i>Импорт/Экспорт
                </a>
              </li>
              <li className="no-icon">
                <a href="#">Резервное копирование</a>
              </li>
            </ul>
          </div>
        </li>
        <li className="popup-parent">
          <a href="#">
            <i className="fal fa-bell"></i>
          </a>
          <div className="popup popup-notif">
            <ul>
              <li>
                <input type="checkbox" id="not-1" />
                <label htmlFor="not-1">
                  Истекает действие договора №6156. Требуется продление или
                  перемещение в архив.
                </label>
              </li>
              <li>
                <input type="checkbox" id="not-2" />
                <label htmlFor="not-2">
                  Истекает действие договора №6156. Требуется продление или
                  перемещение в архив.
                </label>
              </li>
              <li>
                <input type="checkbox" id="not-3" />
                <label htmlFor="not-3">
                  Истекает действие договора №6156. Требуется продление или
                  перемещение в архив.
                </label>
              </li>
              <li>
                <input type="checkbox" id="not-4" />
                <label htmlFor="not-4">
                  Истекает действие договора №6156. Требуется продление или
                  перемещение в архив.
                </label>
              </li>
            </ul>
            <a href="#" className="go-to-notif">
              <i className="fal fa-bell"></i>
              <span>Перейти в центр уведомлений</span>
            </a>
          </div>
        </li>
      </ul>
      <div className="profile-info">
        <div className="profile-name">
          <span>maxadmin</span>
          <span>max@test.tt</span>
        </div>

        <div className="popup-parent">
          <img
            src="/no-avatar.gif"
            alt=""
            width="50"
            height="50"
            className="rounded-img"
          />
          <div className="popup popup-usermenu">
            <ul className="popup-menu">
              <li>
                <a href="/users/profile/">
                  <i className="fal fa-user"></i>
                  Мой профиль
                </a>
              </li>
              <li>
                <a href="/users/logout">
                  <i className="fal fa-external-link"></i>Выход
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
