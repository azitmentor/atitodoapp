const APIURL = "https://atitodoapi.laky.ovh/";

export function DeleteItem(id: number): Promise<Response> {
  const requestOptions = {
    method: "DELETE",
  };
  return fetch(APIURL + "api/todo/" + id, requestOptions);
}

export function LoadItems(text: string, tag: string): Promise<any> {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify({text: text, tags: []}),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(APIURL + "api/todo/list", requestOptions).then((r) => r.json());
}

export function SaveItem(item: any): Promise<any> {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(item),
    headers: { "Content-Type": "application/json" },
  };
  return fetch(APIURL + "api/todo/save", requestOptions);
}
