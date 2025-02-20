import moment from 'moment'

export const canChangeDuration = phase => {
  if (!phase) {
    return false
  }
  return moment(phase.scheduledEndDate).isAfter()
}
