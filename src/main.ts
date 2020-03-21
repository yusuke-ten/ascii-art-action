import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    core.setOutput('test', 'test output')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
