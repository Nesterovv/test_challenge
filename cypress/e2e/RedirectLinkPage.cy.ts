import { StatusCodesPage } from '../POM/RedirectLinkPage';

describe('Status Codes Test', () => {
  const statusCodesPage = new StatusCodesPage();

  beforeEach(() => {
    statusCodesPage.navigate();
  });

  it('should verify the 301 status code page contains correct text', () => {

    statusCodesPage.clickStatusCode301();
    statusCodesPage.verifyStatusCodeText('This page returned a 301 status code.');
  });

  it('should verify the 200 status code page contains correct text', () => {
    statusCodesPage.clickStatusCode200();
    statusCodesPage.verifyStatusCodeText('This page returned a 200 status code.');
  });

  it('should verify the 404 status code page contains correct text', () => {

    statusCodesPage.clickStatusCode404();
    statusCodesPage.verifyStatusCodeText('This page returned a 404 status code.');
  });

  it('should verify the 500 status code page contains correct text', () => {
    statusCodesPage.clickStatusCode500();
    statusCodesPage.verifyStatusCodeText('This page returned a 500 status code.');
  });
});
