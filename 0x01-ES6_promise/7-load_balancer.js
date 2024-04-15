export default function loadBalancer(chinaDownload, USDownload) {
  // We use Promise.race to wait for the first promise to settle or be resolved...
  return Promise.race([chinaDownload, USDownload]);
}
