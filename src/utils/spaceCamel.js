export default function (s) {
  if (!s) {
    return;
  }
  return s.replace(/([a-z])([A-Z])/g, "$1 $2");
}
