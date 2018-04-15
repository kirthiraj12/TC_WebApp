function TestingGoogle()
{
  //Opens the specified URL in a running instance of the specified browser.
  Browsers.Item(btEdge).Navigate("https://www.google.com/");
  //Clicks at point (45, 25) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(45, 25);
  //Clicks at point (101, 17) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(101, 17);
  //Sets the text 't' in the 'textboxLstIb' text editor.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.SetText("t");
  //Clicks at point (125, 18) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(125, 18);
  //Sets the text 'tes' in the 'textboxLstIb' text editor.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.SetText("tes");
  //Clicks at point (131, 19) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(131, 19);
  //Sets the text 'testin' in the 'textboxLstIb' text editor.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.SetText("testin");
  //Clicks at point (101, 17) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(101, 17);
  //Clicks at point (125, 18) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(125, 18);
  //Clicks at point (131, 19) of the 'textboxLstIb' object.
  Aliases.browser.pageGoogle.formTsf.textboxLstIb.Click(131, 19);
  //Clicks the 'buttonGoogleSearch' control.
  Aliases.browser.pageGoogle.formTsf.buttonGoogleSearch.ClickButton();
  //Clicks at point (442, 35) of the 'panelIxqz2eAi3msdXpdarrPso8icVk' object.
  Aliases.browser.pageTestingGoogleSearch.panelRcnt.panelCol.panelRes.panelIxqz2eAi3msdXpdarrPso8icVk.Click(442, 35);
}