# Langdeck Saynetes Documentation
## Arborescence des pages
```javascript
<Routes>
  <Route path="/" element={<SaynetesPage />} />
  <Route path="/saynetes_page" element={<SaynetesPage />} />
  <Route path="/language_page" element={<LanguagePage />} />
  <Route path="theme_page/:id" element={<ThemePage />} />
  <Route path="dialog_page/:id" element={<DialogPage />} />
  <Route path="cartolang" element={<CartolangPage />} />
  <Route path="country_page/:id" element={<CartoCountryPage />} />
  <Route path="search_country_page/:id" element={<SearchCountryPage />} />
  <Route path="carto_language_page/:id" element={<CartoLanguagePage uid={<ComponentGetID />} />} />
  <Route path="country_languages_page/:id" element={<CountryLanguagesPage />} />
  <Route component={SaynetesPage} />
  <Route path="*" element={
    <main style={{ padding: "1rem" }}>
      <p>There's nothing here!</p>
      <App/>
    </main>
  } />
</Routes>
```

### SaynetesPage

```
<main>
    <Layout>
        <SaynetesHomeSection
            dynamicStylesTitle={dynamicStylesTitle}
            dynamicStylesSubTitle={dynamicStylesSubTitle}
            dynamicStylesSubSection={dynamicStylesSubSection}
            callbackModal={callbackModal} />
        <SaynetesDescriptionSection dynamicStylesTitle={dynamicStylesSubTitle}/>
        <SaynetesCardSystemSection dynamicStylesTitle={dynamicStylesSubSection}/>
        <SaynetesAboutSection dynamicStylesTitle={dynamicStylesSubSection}/>
    </Layout >
</main>
```

### LanguagePage
#### LanguageDeck
##### LanguageCard
### ThemePage
ThemePage -> ThemeDeck -> SubThemeDeck -> StoryDeck
#### StoryDeck
##### StoryCard
StoryCard -> DialogPage
### DialogPage
#### DialogDeck
##### DialogCard
###### KeywordPlayer
KeywordPlayer -> KeywordPopper
###### AudioPlayer





