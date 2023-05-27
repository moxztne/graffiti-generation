var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "key": "s48F4w8lCvirhuG06bXCoRE0anNbHABOeYIIUJELmelucaNjN7sqn7JB6b6W",
  "prompt": "graffiti stiker of text 'Hello World', plain background, 4K",
    "negative_prompt": "((out of frame)), ((human)), (((abstract))), ((missing letters)), ((miss spelling))",
  "width": "512",
  "height": "512",
  "samples": "1",
  "num_inference_steps": "20",
  "seed": null,
  "guidance_scale": 7.5,
  "safety_checker": "yes",
  "multi_lingual": "no",
  "panorama": "no",
  "self_attention": "no",
  "upscale": "no",
  "embeddings_model": "embeddings_model_id",
  "webhook": null,
  "track_id": null
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://stablediffusionapi.com/api/v3/text2img", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));