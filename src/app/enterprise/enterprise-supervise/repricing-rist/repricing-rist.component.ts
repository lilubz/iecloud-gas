import { Component, OnInit } from '@angular/core';
import { RepricingRistService } from './repricing-rist.servise';
import { FormBuilder, AbstractControl, Validators, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
	selector: 'repricing-rist',
	templateUrl: 'repricing-rist.component.html',
	styleUrls: ['repricing-rist.component.scss'],
	providers: [RepricingRistService]
})

export class RepricingRistComponent implements OnInit {
	nowTime = new Date;
	adddisplay: boolean = false;
	changedisplay: boolean = false;
	deletedisplay: boolean = false;
	pricelist: any;
	specificationId: any;
	price: number;
	reprice: any;
	msgs: any = "sdf asf";
	dropdown = {
		status: [
		],
		region: [],
	};
	formModel = {
		region: '',
		repricing: '',
		pricingId: '',
		specificationId: ''
	};
	constructor(
		public _service: RepricingRistService,
		private fb: FormBuilder,
		private messageService: MessageService
	) { }
	ngOnInit() {
		this.nowTimes();
		this.listGcsoecification()
		this.list();
	}
	//规格列表
	listGcsoecification = () => {
		this._service.listGcsoecification()
			.then(data => {
				this.dropdown.region = this.dropdown.status.concat(data.data.map((item) => ({
					label: item.specificationId,
					value: item.specificationId
				})));
				this.formModel.region = this.dropdown.region[0].value;
			})
			.catch(data => {
				this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
			})
	}
	//展示信息列表
	list = () => {
		this._service.alllistGcPricingByCorp()
			.then(data => {
				this.pricelist = data.data;
			})
			.catch(data => {
				this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
			})
	}
	//时间
	nowTimes = () => {
		this.nowTime = new Date
		setTimeout(() => {
			this.nowTimes()
		}, 1000);
	}
	//新增弹出框
	addprice = () => {
		this.adddisplay = true;
	}
	//保存价格
	saveAddPrice = () => {
		if (this.formModel.repricing) {
			this._service.updateOrAddPricing({
				specificationId: this.formModel.region,
				price: this.formModel.repricing
			})
				.then(data => {
					console.log(data);
					
					if (data.status === 0) {
						this.adddisplay = false;
						this.changedisplay = false;
						this.deletedisplay = false
						this.list()
					}
				}).catch(data => {
					this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
				})
		}
	};
	//取消并关闭弹出框
	delAddPrice = () => {
		this.adddisplay = false;
		this.changedisplay = false;
		this.deletedisplay = false;
	};
	//修改价格
	changePricing = (param) => {
		this.formModel.region = param.specificationId;
		this.formModel.repricing = param.price;
		this.changedisplay = true;
	}
	//删除
	deletepricing = (param) => {
		this.deletedisplay = true;
		this.formModel.pricingId = param.pricingId
		this.formModel.specificationId = param.specificationId

	}
	//确认删除
	deletePrice = () => {
		this._service.deletePricing({
			pricingId: this.formModel.pricingId
		}).then(data => {
			if (data.status === 0) {
				this.deletedisplay = false;
				this.list()
			}
		}).catch(data => {
			this.messageService.add({ severity: 'warn', summary: '获取信息失败', detail: data.msg });
		})
	}
}