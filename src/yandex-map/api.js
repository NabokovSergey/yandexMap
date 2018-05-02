// @flow
import { API_MAP_URL } from "./constants";

const successCallbackName = "_$_api_success";
const errorCallbackName = "_$_api_error";
let promise;

const defaultOptions = {
  lang: "ru_RU",
  coordorder: "latlong",
  load: "package.full",
  mode: "release",
  ns: "",
  onload: successCallbackName,
  onerror: errorCallbackName
};

function generateParams(options) {
  return Object.keys(options)
    .map(key => `${key}=${options[key]}`)
    .join("&");
}

export function addScriptMapApi(
  url: string = API_MAP_URL,
  options: Object = defaultOptions
) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.onload = resolve;
    script.onerror = reject;
    script.src = `${url}/?${generateParams(options)}`;

    document.getElementsByTagName("head")[0].appendChild(script);
  });
}

export function load(url?: string, options?: Object) {
  promise =
    promise ||
    new Promise((resolve, reject) => {
      window[successCallbackName] = ymaps => {
        resolve(ymaps);
        window[successCallbackName] = null;
      };

      window[errorCallbackName] = error => {
        reject(error);
        window[errorCallbackName] = null;
      };

      addScriptMapApi(url, options);
    });
  return promise;
}

export function createMap(
  yaMaps: Object,
  element: HTMLElement,
  options: Object
) {
  if (!yaMaps) {
    console.error("error: create map");
    return null;
  }
  return new yaMaps.Map(element, {
    ...options
  });
}
