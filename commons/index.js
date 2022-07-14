export default function getApiStatus(code, data, message) {
  return { data: { status: { code, message }, data: data } };
}
