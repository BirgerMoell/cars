
export function toggleCarListVisibility(show) {
	console.log('toggleCarListVisibility', show);
  return {
    type: 'SHOW_CARS',
    show: show,
  }
}
