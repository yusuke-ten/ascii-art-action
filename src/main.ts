import * as core from '@actions/core'
import * as exec from '@actions/exec'

async function run(): Promise<void> {
  try {
    await exec.exec(`echo 'test sample'`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
