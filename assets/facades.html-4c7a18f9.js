import{_ as n,p as s,q as a,a1 as e}from"./framework-e03faf0e.js";const t={},c=e(`<h1 id="facades" tabindex="-1"><a class="header-anchor" href="#facades" aria-hidden="true">#</a> Facades</h1><p>Perhaps the facades will be useful to you:</p><div class="language-php line-numbers-mode" data-ext="php"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">LaravelLang<span class="token punctuation">\\</span>Publisher<span class="token punctuation">\\</span>Facades<span class="token punctuation">\\</span>Helpers<span class="token punctuation">\\</span>Locales</span><span class="token punctuation">;</span>

<span class="token comment">// List of available localizations.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">available</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>

<span class="token comment">// List of installed localizations.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">installed</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>

<span class="token comment">// List of installed localizations without protected codes.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">installedWithoutProtects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>

<span class="token comment">// List of uninstalled localizations.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">notInstalled</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>

<span class="token comment">// Retrieving a list of protected locales.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">protects</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>

<span class="token comment">// Check if language packs are available in requested locale.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">isAvailable</span><span class="token punctuation">(</span><span class="token class-name">LocaleCode</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$locale</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>

<span class="token comment">// Check if a language pack is installed.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">isInstalled</span><span class="token punctuation">(</span><span class="token class-name">LocaleCode</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$locale</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>

<span class="token comment">// The checked locale protecting.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">isProtected</span><span class="token punctuation">(</span><span class="token class-name">LocaleCode</span><span class="token operator">|</span><span class="token keyword type-declaration">string</span><span class="token operator">|</span><span class="token keyword type-declaration">null</span> <span class="token variable">$locale</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">bool</span>

<span class="token comment">// Getting the default localization name.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">getDefault</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>

<span class="token comment">// Getting the fallback localization name.</span>
<span class="token class-name static-context">Locales</span><span class="token operator">::</span><span class="token function">getFallback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),o=[c];function p(l,i){return s(),a("div",null,o)}const u=n(t,[["render",p],["__file","facades.html.vue"]]);export{u as default};
