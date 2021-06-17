export default function urlEncodeQueryParams(data) {
  const params = Object.keys(data).map(key =>
    data[key] ? `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}` : ''
  );
  return params.filter(value => !!value).join('&');
}
