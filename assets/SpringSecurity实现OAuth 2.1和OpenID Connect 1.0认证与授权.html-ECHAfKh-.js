import{_ as n,o as s,c as a,d as t}from"./app-HBA039kk.js";const p="/assets/20240104103723-thz74VNO.png",o="/assets/20240104103414-Ip8exN0r.png",e="/assets/20240104103503-Om3eAInC.png",c="/assets/20240104111108-EW0zC86r.png",u="/assets/20240104112210-YaRobb5x.png",l="/assets/20240104112522-Zt1R3L3g.png",i="/assets/20240104124409-exPshqA7.png",k="/assets/20231223100759-gFzvyxwz.png",r="/assets/20231223101156-zAW-c3kp.png",g="/assets/20240102134245-bjDyf-f_.png",d={},h=t(`<h1 id="springsecurity实现oauth-2-1和openid-connect-1-0认证与授权" tabindex="-1"><a class="header-anchor" href="#springsecurity实现oauth-2-1和openid-connect-1-0认证与授权"><span>SpringSecurity实现OAuth 2.1和OpenID Connect 1.0认证与授权</span></a></h1><p>参考资料：</p><ul><li><p>https://docs.spring.io/spring-authorization-server/reference/index.html</p></li><li><p>https://docs.spring.io/spring-security/reference/servlet/oauth2/index.html</p></li></ul><p>版本信息：</p><ul><li>JDK 17</li><li>Spring Boot 3.2.1</li><li>Spring Authorization Server 1.2.1</li><li>Spring Securiy OAuth2 Resource Server 6.2.1</li><li>Spring Securiy OAuth2 Client 6.2.1</li></ul><h2 id="oauth2授权服务器" tabindex="-1"><a class="header-anchor" href="#oauth2授权服务器"><span>OAuth2授权服务器</span></a></h2><h3 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-oauth2-authorization-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="创建授权服务器配置类" tabindex="-1"><a class="header-anchor" href="#创建授权服务器配置类"><span>创建授权服务器配置类</span></a></h3><p><strong>使用默认配置</strong></p><p>可以直接使用 <code>OAuth2AuthorizationServerConfiguration</code> 配置类。</p><p>默认配置自动注入了一个 <code>SecurityFilterChain</code> Bean，并设置了授权服务器的一些端点。</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token annotation punctuation">@Import</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AuthorizationServerConfiguration</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>
    
<span class="token punctuation">}</span>
</code></pre></div><p>或者手动调用 <code>OAuth2AuthorizationServerConfiguration#applyDefaultSecurity</code> 方法，然后获取 <code>OAuth2AuthorizationServerConfigurer</code> 配置对象进行自定义。</p><blockquote><p>推荐使用这种配置方式</p></blockquote><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">authorizationServerSecurityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">OAuth2AuthorizationServerConfiguration</span><span class="token punctuation">.</span><span class="token function">applyDefaultSecurity</span><span class="token punctuation">(</span>http<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OAuth2AuthorizationServerConfigurer</span> authServerConfigurer <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">getConfigurer</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AuthorizationServerConfigurer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 自定义配置</span>

        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">defaultSecurityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span>authorize <span class="token operator">-&gt;</span> authorize<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                                         <span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token class-name">Customizer</span><span class="token punctuation">.</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>自定义配置</strong></p><p>创建 <code>OAuth2AuthorizationServerConfigurer</code> 对象，使用其对授权服务器进行自定义</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">authorizationServerSecurityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">OAuth2AuthorizationServerConfigurer</span> oAuth2AuthorizationServerConfigurer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OAuth2AuthorizationServerConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token keyword">with</span><span class="token punctuation">(</span>oAuth2AuthorizationServerConfigurer<span class="token punctuation">,</span> authorizationServer <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
			
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span>authorize <span class="token operator">-&gt;</span> authorize<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        http<span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span>csrf <span class="token operator">-&gt;</span> csrf<span class="token punctuation">.</span><span class="token function">disable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="实现一个最基础的授权服务器" tabindex="-1"><a class="header-anchor" href="#实现一个最基础的授权服务器"><span>实现一个最基础的授权服务器</span></a></h3><p><strong>配置</strong></p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 授权服务器Filter链
     * */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">authorizationServerSecurityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">OAuth2AuthorizationServerConfiguration</span><span class="token punctuation">.</span><span class="token function">applyDefaultSecurity</span><span class="token punctuation">(</span>http<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">OAuth2AuthorizationServerConfigurer</span> authServerConfigurer <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">getConfigurer</span><span class="token punctuation">(</span><span class="token class-name">OAuth2AuthorizationServerConfigurer</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        authServerConfigurer<span class="token punctuation">.</span><span class="token function">oidc</span><span class="token punctuation">(</span><span class="token class-name">Customizer</span><span class="token punctuation">.</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// OIDC;</span>

        <span class="token comment">// 未授权时, 重定向到登录页</span>
        http<span class="token punctuation">.</span><span class="token function">exceptionHandling</span><span class="token punctuation">(</span>exception <span class="token operator">-&gt;</span> exception<span class="token punctuation">.</span><span class="token function">defaultAuthenticationEntryPointFor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">LoginUrlAuthenticationEntryPoint</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">MediaTypeRequestMatcher</span><span class="token punctuation">(</span><span class="token class-name">MediaType</span><span class="token punctuation">.</span><span class="token constant">TEXT_HTML</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 普通请求Filter链
     * */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token annotation punctuation">@Order</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">defaultSecurityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span>authorize <span class="token operator">-&gt;</span> authorize<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                                         <span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        http<span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token class-name">Customizer</span><span class="token punctuation">.</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 保存, 查询已注册的客户端
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">RegisteredClientRepository</span> <span class="token function">registeredClientRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">RegisteredClient</span> debuggerClient <span class="token operator">=</span> <span class="token class-name">RegisteredClient</span><span class="token punctuation">.</span><span class="token function">withId</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                                   <span class="token punctuation">.</span><span class="token function">clientId</span><span class="token punctuation">(</span><span class="token string">&quot;oauthdebugger&quot;</span><span class="token punctuation">)</span>
                                                   <span class="token punctuation">.</span><span class="token function">clientSecret</span><span class="token punctuation">(</span><span class="token string">&quot;$2a$10$cRyCiTevh3FtPx6RicEcoO74HL.98e1vUvwoR9yLJwPuFydZPs/me&quot;</span><span class="token punctuation">)</span> <span class="token comment">// oauthdebugger</span>
                                                   <span class="token punctuation">.</span><span class="token function">clientAuthenticationMethod</span><span class="token punctuation">(</span><span class="token class-name">ClientAuthenticationMethod</span><span class="token punctuation">.</span><span class="token constant">CLIENT_SECRET_BASIC</span><span class="token punctuation">)</span> <span class="token comment">// 认证方式: Basic</span>
                                                   <span class="token punctuation">.</span><span class="token function">authorizationGrantType</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationGrantType</span><span class="token punctuation">.</span><span class="token constant">AUTHORIZATION_CODE</span><span class="token punctuation">)</span> <span class="token comment">// 授权方式: 授权码</span>
                                                   <span class="token punctuation">.</span><span class="token function">redirectUri</span><span class="token punctuation">(</span><span class="token string">&quot;https://oauthdebugger.com/debug&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 客户端认证成功重定向URL</span>
                                                   <span class="token punctuation">.</span><span class="token function">postLogoutRedirectUri</span><span class="token punctuation">(</span><span class="token string">&quot;https://oauthdebugger.com&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 客户端退出登录重定向URL</span>
                                                   <span class="token punctuation">.</span><span class="token function">scope</span><span class="token punctuation">(</span><span class="token string">&quot;read&quot;</span><span class="token punctuation">)</span>
                                                   <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryRegisteredClientRepository</span><span class="token punctuation">(</span>debuggerClient<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 配置授权服务器
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">AuthorizationServerSettings</span> <span class="token function">authorizationServerSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">AuthorizationServerSettings</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                          <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 配置客户端
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ClientSettings</span> <span class="token function">clientSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ClientSettings</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                             <span class="token punctuation">.</span><span class="token function">requireAuthorizationConsent</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
                             <span class="token punctuation">.</span><span class="token function">requireProofKey</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
                             <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * 配置Token
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">TokenSettings</span> <span class="token function">tokenSettings</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">TokenSettings</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * JWKSource,用于签署令牌
     * */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JWKSource</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SecurityContext</span><span class="token punctuation">&gt;</span></span> <span class="token function">jwkSource</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">KeyPair</span> keyPair <span class="token operator">=</span> <span class="token function">generateRsaKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RSAPublicKey</span> publicKey <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RSAPublicKey</span><span class="token punctuation">)</span> keyPair<span class="token punctuation">.</span><span class="token function">getPublic</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RSAPrivateKey</span> privateKey <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">RSAPrivateKey</span><span class="token punctuation">)</span> keyPair<span class="token punctuation">.</span><span class="token function">getPrivate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">RSAKey</span> rsaKey <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RSAKey<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span>publicKey<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">privateKey</span><span class="token punctuation">(</span>privateKey<span class="token punctuation">)</span>
                                                     <span class="token punctuation">.</span><span class="token function">keyID</span><span class="token punctuation">(</span><span class="token constant">UUID</span><span class="token punctuation">.</span><span class="token function">randomUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                                                     <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JWKSet</span> jwkSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JWKSet</span><span class="token punctuation">(</span>rsaKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">ImmutableJWKSet</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>jwkSet<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">KeyPair</span> <span class="token function">generateRsaKey</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">KeyPair</span> keyPair<span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">KeyPairGenerator</span> keyPairGenerator <span class="token operator">=</span> <span class="token class-name">KeyPairGenerator</span><span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token string">&quot;RSA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            keyPairGenerator<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token number">2048</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            keyPair <span class="token operator">=</span> keyPairGenerator<span class="token punctuation">.</span><span class="token function">generateKeyPair</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">NoSuchAlgorithmException</span> ex<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalStateException</span><span class="token punctuation">(</span>ex<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> keyPair<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 令牌解码器
     * */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">JwtDecoder</span> <span class="token function">jwtDecoder</span><span class="token punctuation">(</span><span class="token class-name">JWKSource</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">SecurityContext</span><span class="token punctuation">&gt;</span></span> jwkSource<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">OAuth2AuthorizationServerConfiguration</span><span class="token punctuation">.</span><span class="token function">jwtDecoder</span><span class="token punctuation">(</span>jwkSource<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">UserDetailsService</span> <span class="token function">userDetailsService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">UserDetails</span> admin <span class="token operator">=</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">username</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">password</span><span class="token punctuation">(</span><span class="token string">&quot;$2a$10$2DRHwzwFv5ZHQhs4RqDG5eFi4wzuu/VzY9.lLfrfWOl/Ao.R9Z7vm&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">roles</span><span class="token punctuation">(</span><span class="token string">&quot;USER&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ADMIN&quot;</span><span class="token punctuation">)</span>
                                <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryUserDetailsManager</span><span class="token punctuation">(</span>admin<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">PasswordEncoder</span> <span class="token function">passwordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">BCryptPasswordEncoder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>查看授权服务器元素据</strong></p><p>GET http://localhost:9000/.well-known/oauth-authorization-server</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;issuer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;authorization_endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/authorize&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;device_authorization_endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/device_authorization&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token_endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/token&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;token_endpoint_auth_methods_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;client_secret_basic&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_post&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_jwt&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;private_key_jwt&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;jwks_uri&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/jwks&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;response_types_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;code&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;grant_types_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;authorization_code&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_credentials&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;refresh_token&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;urn:ietf:params:oauth:grant-type:device_code&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;revocation_endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/revoke&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;revocation_endpoint_auth_methods_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;client_secret_basic&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_post&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_jwt&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;private_key_jwt&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;introspection_endpoint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://localhost:9000/oauth2/introspect&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;introspection_endpoint_auth_methods_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;client_secret_basic&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_post&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;client_secret_jwt&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;private_key_jwt&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;code_challenge_methods_supported&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;S256&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>测试</strong></p><p>OAuth2测试工具网站：</p><ul><li><p>https://oauthdebugger.com/</p></li><li><p>https://oidcdebugger.com/</p></li></ul><p>请求授权服务器认证端点</p><p><img src="`+p+'" alt=""></p><p>授权服务器自动重定向到登录页面，要求进行登录认证</p><p><img src="'+o+'" alt=""></p><p>输入用户名、密码，登录成功后，授权服务器会自动重定向到注册客户端时配置的回调URL，这里是 https://oauthdebugger.com/debug，并将授权码code作为URL参数拼接到回调URL上</p><p><img src="'+e+'" alt=""></p><p>根据授权码获取Token</p><p><img src="'+c+'" alt=""></p><p>校验Token</p><p><img src="'+u+'" alt=""></p><p>取消授权(使Token失效)</p><p><img src="'+l+`" alt=""></p><h2 id="oauth2资源服务器" tabindex="-1"><a class="header-anchor" href="#oauth2资源服务器"><span>OAuth2资源服务器</span></a></h2><h3 id="依赖-1" tabindex="-1"><a class="header-anchor" href="#依赖-1"><span>依赖</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-oauth2-resource-server<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h3 id="实现一个最简单的资源服务器" tabindex="-1"><a class="header-anchor" href="#实现一个最简单的资源服务器"><span>实现一个最简单的资源服务器</span></a></h3><p><strong>创建SpringBoot应用</strong></p><p>创建启动引导类，application配置文件如下</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8180</span>

<span class="token key attr-name">logging.level.org.springframework.security.oauth2</span><span class="token punctuation">=</span><span class="token value attr-value">trace</span>

<span class="token key attr-name">spring.security.oauth2.resourceserver.jwt.issuer-uri</span><span class="token punctuation">=</span><span class="token value attr-value">http://localhost:9000</span>
</code></pre></div><p><strong>创建配置类</strong></p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Value</span><span class="token punctuation">(</span><span class="token string">&quot;\${spring.security.oauth2.resourceserver.jwt.issuer-uri}&quot;</span><span class="token punctuation">)</span> <span class="token keyword">private</span> <span class="token class-name">String</span> iss<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">securityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">JwtDecoder</span> jwtDecoder <span class="token operator">=</span> <span class="token class-name">JwtDecoders</span><span class="token punctuation">.</span><span class="token function">fromIssuerLocation</span><span class="token punctuation">(</span>iss<span class="token punctuation">)</span><span class="token punctuation">;</span>
        http<span class="token punctuation">.</span><span class="token function">oauth2ResourceServer</span><span class="token punctuation">(</span>resourceServer <span class="token operator">-&gt;</span> resourceServer<span class="token punctuation">.</span><span class="token function">jwt</span><span class="token punctuation">(</span>jwt <span class="token operator">-&gt;</span> jwt<span class="token punctuation">.</span><span class="token function">decoder</span><span class="token punctuation">(</span>jwtDecoder<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// JWT解码器</span>

        http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span>authorize <span class="token operator">-&gt;</span> authorize<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                                         <span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>添加一个测试Controller</strong></p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@RestController</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">HelloController</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/authInfo&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">public</span> <span class="token class-name">Authentication</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token class-name">Authentication</span> authentication<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> authentication<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p><strong>测试</strong></p><p>从授权服务器获取一个token，设置到Authoization请求头中，请求 http://localhost:8180/authInfo</p><p><img src="`+i+`" alt=""></p><h2 id="oauth2客户端" tabindex="-1"><a class="header-anchor" href="#oauth2客户端"><span>OAuth2客户端</span></a></h2><h3 id="依赖-2" tabindex="-1"><a class="header-anchor" href="#依赖-2"><span>依赖</span></a></h3><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-oauth2-client<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="oauth2客户端登录" tabindex="-1"><a class="header-anchor" href="#oauth2客户端登录"><span>OAuth2客户端登录</span></a></h2><h3 id="github" tabindex="-1"><a class="header-anchor" href="#github"><span>github</span></a></h3><p><strong>1.在github中注册客户端，获取clientId和clientSecret</strong></p><p>https://github.com/settings/applications/new</p><p><img src="`+k+'" alt=""></p><p><img src="'+r+`" alt=""></p><p><strong>2.配置客户端注册信息</strong></p><p>通过配置文件的方式</p><div class="language-properties" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>

<span class="token key attr-name">spring.security.oauth2.client.registration.github.client-id</span><span class="token punctuation">=</span><span class="token value attr-value">a90a08a6a36a63ea9c83</span>
<span class="token key attr-name">spring.security.oauth2.client.registration.github.client-secret</span><span class="token punctuation">=</span><span class="token value attr-value">a2f816003caeffb2b5e1cb9932045627ccf4de61</span>
</code></pre></div><p>通过配置类的方式</p><blockquote><p>关于Github OAuth相关的配置信息参考Github文档：</p><p>https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps</p></blockquote><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">SecurityFilterChain</span> <span class="token function">securityFilterChain</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        http<span class="token punctuation">.</span><span class="token function">authorizeHttpRequests</span><span class="token punctuation">(</span>authorize <span class="token operator">-&gt;</span> authorize<span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                                                            <span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token function">oauth2Login</span><span class="token punctuation">(</span><span class="token class-name">Customizer</span><span class="token punctuation">.</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> http<span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">ClientRegistrationRepository</span> <span class="token function">clientRegistrationRepository</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">InMemoryClientRegistrationRepository</span><span class="token punctuation">(</span><span class="token function">githubClientRegistration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token class-name">ClientRegistration</span> <span class="token function">githubClientRegistration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">ClientRegistration</span><span class="token punctuation">.</span><span class="token function">withRegistrationId</span><span class="token punctuation">(</span><span class="token string">&quot;github&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">clientId</span><span class="token punctuation">(</span><span class="token string">&quot;a90a08a6a36a63ea9c83&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">clientSecret</span><span class="token punctuation">(</span><span class="token string">&quot;a2f816003caeffb2b5e1cb9932045627ccf4de61&quot;</span><span class="token punctuation">)</span>
                               <span class="token punctuation">.</span><span class="token function">clientAuthenticationMethod</span><span class="token punctuation">(</span><span class="token class-name">ClientAuthenticationMethod</span><span class="token punctuation">.</span><span class="token constant">CLIENT_SECRET_BASIC</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">authorizationGrantType</span><span class="token punctuation">(</span><span class="token class-name">AuthorizationGrantType</span><span class="token punctuation">.</span><span class="token constant">AUTHORIZATION_CODE</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">redirectUri</span><span class="token punctuation">(</span><span class="token string">&quot;{baseUrl}/login/oauth2/code/{registrationId}&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">authorizationUri</span><span class="token punctuation">(</span><span class="token string">&quot;https://github.com/login/oauth/authorize&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">tokenUri</span><span class="token punctuation">(</span><span class="token string">&quot;https://github.com/login/oauth/access_token&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">userInfoUri</span><span class="token punctuation">(</span><span class="token string">&quot; https://api.github.com/user&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">userNameAttributeName</span><span class="token punctuation">(</span><span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">scope</span><span class="token punctuation">(</span><span class="token string">&quot;read:user&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">clientName</span><span class="token punctuation">(</span><span class="token string">&quot;Github&quot;</span><span class="token punctuation">)</span>
                                 <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        					   <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>实际上，SpringSecurity默认提供了一个 <code>CommonOAuth2Provider</code> 类，其中定义了注册到常见的第三方认证服务器（Google, GitHub, Facebook, and Okta）的配置信息。</p><p>注册到Giuhub可以这么写</p><div class="language-java" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">private</span> <span class="token class-name">ClientRegistration</span> <span class="token function">githubClientRegistration</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token class-name">CommonOAuth2Provider</span><span class="token punctuation">.</span><span class="token constant">GITHUB</span><span class="token punctuation">.</span><span class="token function">getBuilder</span><span class="token punctuation">(</span><span class="token string">&quot;github&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">clientId</span><span class="token punctuation">(</span><span class="token string">&quot;a90a08a6a36a63ea9c83&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">clientSecret</span><span class="token punctuation">(</span><span class="token string">&quot;a2f816003caeffb2b5e1cb9932045627ccf4de61&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p><strong>3.测试</strong></p><p>浏览器访问 http://localhost:8080/，会发生以下请求：</p><ol><li><p>客户端返回302，Location为</p><p>http://localhost:8080/oauth2/authorization/github</p></li><li><p>客户端返回302，Location为</p><p>https://github.com/login/oauth/authorize?response_type=code&amp;client_id=a90a08a6a36a63ea9c83&amp;scope=read:user&amp;state=uhmGikYFwwXWjr2GF-klNMpS2Gcf5UxrJZz8LloQ3fs%3D&amp;redirect_uri=http://localhost:8080/login/oauth2/code/github</p></li><li><p>浏览器自动重定向到github认证页面</p></li></ol><p>​ <img src="`+g+'" alt=""></p>',76),m=[h];function y(f,w){return s(),a("div",null,m)}const q=n(d,[["render",y],["__file","SpringSecurity实现OAuth 2.1和OpenID Connect 1.0认证与授权.html.vue"]]);export{q as default};
