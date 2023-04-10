describe('QA Automation Engineer Assessment | Andrey Vishin', () => {

  const page = 'https://www.wnba.com/standings/';
  const seasonSelector = '[id="filter-season"]';
  const teamCellAttribute = '[id="league"] wnba-stat-table [class="stat-table__overflow"] tbody tr a';

  const testCase = {
    season: '2018',
    numberTableRecords: 12
  }

  it('End-to-end automation script', () => {

    cy
      .visit(page)

    cy
      .log('Choose season: ' + testCase.season)
      .get(seasonSelector, { log: false })
      .select(testCase.season)
      .wait(1000)
      .url({ log: false })
      .should('contain', testCase.season)

    cy
      .log('Check table length assertion')
      .get(teamCellAttribute, { log: false })
      .should('have.length', testCase.numberTableRecords)

    cy
      .log('Print team list')
      .get(teamCellAttribute, { log: false })
      .each((teamCell) => {
        let teamName = teamCell.text().replace("- x","").replace("- o","")
        Cypress.log({
          displayName: ' ',
          message: teamName
        })
      })
  })
})