import css from './styles.module.css';

function MainNavbar() {
  return (
    <ul className={css.root}>
      <li>Home</li>
      <li>About</li>
      <li>Price</li>
    </ul>
  );
}

export default MainNavbar;
