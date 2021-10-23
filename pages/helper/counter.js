function counter(number, length) {
  return (length + (number % length)) % length;
}
export default counter;
