function Banner({ image, title, subtitle }) {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image})` }}
      role="img"
      aria-label={`Bannière ${title}`}
    >
      <div className="banner__overlay">
        <div className="banner__content">
          {subtitle && (
            <span className="banner__subtitle">{subtitle}</span>
          )}
          <h1 className="banner__title">{title}</h1>
        </div>
      </div>
    </div>
  );
}

export default Banner;