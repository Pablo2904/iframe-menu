import "./menu.css";

export const Menu = ({ items, setSelectedUrl, setSelectedSlug, navigate }) => {
  const onElementClick = (e) => {
    e.stopPropagation();
    const { slug, url } = e.target.dataset;
    setSelectedUrl(url);
    setSelectedSlug(slug);
    navigate(`/${slug}`);
  };
  return (
    <ul className="menu-container" onClick={onElementClick}>
      {items.map((item) => (
        <li
          className={"menu-item"}
          key={item.slug}
          data-slug={item.slug}
          data-url={item.url}
        >
          {item.title}
          {item.children && item.children.length > 0
            ? Menu({
                items: item.children,
                setSelectedUrl,
                setSelectedSlug,
                navigate,
              })
            : null}
        </li>
      ))}
    </ul>
  );
};
