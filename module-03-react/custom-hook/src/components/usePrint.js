export const usePrint = (val) => {
  console.log(
    val,
    new Date().toLocaleDateString(),
    new Date().toLocaleTimeString()
  );
};
