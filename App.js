/**
 * Chu Tự Hoàng
 * https://github.com/HoangChu96/Module_Function_Format
 * 
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TextInput, Slider } from 'react-native';
import * as formatValue from './Format.js';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			money: 0,
			phone: 0,
			datetime: null,
			value: 0.5,
			minValue: 0,
			maxValue: 1,
		}
	}

	render() {
		const moneyFormat = formatValue.coin(this.state.money);
		const phoneFormat = formatValue.phoneNumber(this.state.phone);
		const replaceMoney = Number(formatValue.findAndReplace(this.state.money, ',', ''));
		const replacePhone = Number(formatValue.findAndReplace(this.state.phone, ' ', ''));

		return (
			<View style={styles.container}>
				<TextInput
					style={styles.txtInput}
					value={moneyFormat}
					onChangeText={(text) => this.setState({ money: text })}
					placeholder="format money"
				/>
				<TextInput
					style={styles.txtInput}
					value={phoneFormat}
					onChangeText={(number) => this.setState({ phone: number })}
					placeholder="format phone number"
				/>

				<Text style={styles.title}>Find and replace string to number</Text>
				<Text>Money</Text>
				<Text>{replaceMoney}</Text>
				<Text>Phone</Text>
				<Text>{replacePhone}</Text>

				{/* slider change color intensity */}

				<View style={styles.wrapper}>
					<View style={styles.content}>
						<Text style={styles.txtTitle} >COLOR INTENSITY</Text>
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: formatValue.lighten("#34B089", 0.5) }}>
						<View style={{ width: 25, height: 25, backgroundColor: formatValue.lighten('#000000', this.state.minValue) }} />
						<View style={{ width: 25, height: 25, backgroundColor: formatValue.lighten('#000000', this.state.value) }} />
						<View style={{ width: 25, height: 25, backgroundColor: formatValue.lighten('#000000', this.state.maxValue) }} />
					</View>
					<View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5, backgroundColor: formatValue.lighten("#34B089", 0.5) }}>
						<Text>{this.state.minValue}</Text>
						<Text>{Math.round(this.state.value * 100) / 100}</Text>
						<Text>{this.state.maxValue}</Text>
					</View>
					<Slider
						value={this.state.value}
						onValueChange={value => this.setState({ value })}
						minimumValue={this.state.minValue}
						minimumTrackTintColor='#34B089'
						maximunValue={this.state.maxValue}
						maximumTrackTintColor= {formatValue.lighten("#34B089", 0.5)}
						step={0.01}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	txtInput: {
		fontSize: 14,
		textAlign: 'center',
		margin: 10,
		width: 200
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
	title: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	wrapper: {
		margin: 10,
		width: 300
	},
	content: {
		marginBottom: 5,
		backgroundColor: '#34B089',
		justifyContent: 'center',
		alignItems: 'center'
	},
	txtTitle: {
		color: 'white',
		padding: 5
	},
});
