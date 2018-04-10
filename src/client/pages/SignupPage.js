import React, { Component } from 'react'
import styled from 'styled-components'
import { Grid, Form, Input } from 'semantic-ui-react'

class SignupPage extends Component{

  constructor() {
    super()

  }


  render () {
    return (
      <div>
        <Grid verticalAlign='middle' textAlign='center'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Form>
              <Form.Field required>
                <label>Last name</label>
                <Input placeholder='Full name' />
              </Form.Field>
            </Form>
          </Grid.Column>
        </Grid>

      </div>
    )
  }

}


export default {
  component: SignupPage,
}
