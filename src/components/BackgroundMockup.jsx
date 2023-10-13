export default function BackgroundMockup() {
  return (
    <>
      <img
        className="absolute -left-32 -top-[35%] h-[1300px] w-[600px]"
        src="./gradient.png"
        alt="Gradient Background Image"
      />
      <img
        className="absolute -bottom-[35%] -right-32 h-[1300px] w-[600px]"
        src="./grayish.png"
        alt="Grayish Background Image"
      />
    </>
  );
}
