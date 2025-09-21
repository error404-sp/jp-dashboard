const CustomProfile = ({ icon, alt, size = 24 }) => {
  let src;
  try {
    src = `/assets/${icon}`;
  } catch (err) {
    console.warn(`Icon not found: ${icon}`);
    return null;
  }

  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ borderRadius: "50%" }}
    />
  );
};

export default CustomProfile;
