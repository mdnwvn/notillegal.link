

<section class="hero is-fullheight is-info">
  <div class="hero-head">
    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a href="/" class="navbar-item">notillegal.link</a>
          <span class="navbar-burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>

        <div class="navbar-menu" id="navbarMenu">
            <div class="navbar-end">
              <a href="https://github.com/mdnwvn/notillegal.link" class="navbar-item" target="_blank">Github</a>
              <a href="https://mdnwvn.com" class="navbar-item" target="_blank">MWCOM</a>
            </div>
        </div>
      </div>
      
    </nav>
  </div>
  <div class="hero-body">
    <div class="container has-text-centered">

      <div class="field is-horizontal">

        <div class="field-label is-normal">
          <label class="label">Target Link</label>
        </div>

        <div class="field-body">
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="https://notillegal.link" bind:value={targetUrl}>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">

        <div class="field-label is-normal">
          <label class="label">Custom Path</label>
        </div>

        <div class="field-body">
          <div class="field has-addons has-addons-centered">
            <p class="control">
              <span class="button is-static">
                https://notillegal.link/
              </span>
            </p>
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Custom path" bind:value={customPath}>
            </p>
            <p class="control">
              <span class="button is-static">
                /payload
              </span>
            </p>
          </div>
        </div>
      </div>


      <div class="field is-horizontal">

        <div class="field-label is-normal">
          <label class="label">Final URL</label>
        </div>

        <div class="field-body">
          <div class="field has-addons has-addons-centered">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Custom path" bind:value={finalUrl}>
            </p>
            <div class="control">
              <!-- svelte-ignore a11y-missing-attribute -->
              <div class="button is-primary" id="copyButton">
                Copy
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  import { onMount } from 'svelte';
  import { Base64 } from 'js-base64';

  const trimSlashes = str => str.split('/').filter(v => v !== '').join('/');

  let host = "https://notillegal.link/"

  let targetUrl = ""
  let customPath = "sketchy/custom/link"
  $: finalUrl = host + trimSlashes(customPath) + '/' + Base64.encode(targetUrl);


  
  onMount(async () => {



      var menu = document.querySelector(".navbar-burger");
      var copyButton = document.querySelector("#copyButton");

      

      menu.addEventListener("click", function () {
      var menutarget = menu.getAttribute("data-target");
      var target = document.getElementById(menutarget);
      menu.classList.toggle("is-active");
      target.classList.toggle("is-active");
    });

    copyButton.addEventListener("click", function () {
      navigator.clipboard.writeText(finalUrl);
      alert("Url copied to keyboard");
    });


  });

</script>
