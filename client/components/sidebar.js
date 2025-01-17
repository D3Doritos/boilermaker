import React from 'react'
import {Header, Image, Table} from 'semantic-ui-react'

const TableExampleCollapsing = () => (
  <Table basic="very" celled collapsing>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Username</Table.HeaderCell>
        <Table.HeaderCell>Score</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/lena.png"
              rounded
              size="mini"
            />
            <Header.Content>
              Lena
              <Header.Subheader>Human Resources</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>22/23</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/matthew.png"
              rounded
              size="mini"
            />
            <Header.Content>
              Matthew
              <Header.Subheader>Fabric Design</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>15/39</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
              rounded
              size="mini"
            />
            <Header.Content>
              Lindsay
              <Header.Subheader>Entertainment</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>12/27</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/mark.png"
              rounded
              size="mini"
            />
            <Header.Content>
              Mark
              <Header.Subheader>Executive</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>11/24</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleCollapsing
