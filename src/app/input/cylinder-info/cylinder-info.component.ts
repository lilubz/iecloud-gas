import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import { CylinderInfoService, } from './cylinder-info.service';
import { SelectItem } from 'primeng/primeng';
import { zh_CN, DATE_LOCALIZATION } from './../../core/date-localization';


@Component({
    selector: 'gas-cylinder-info',
    templateUrl: './cylinder-info.component.html',
    styleUrls: ['./cylinder-info.component.scss'],
    providers: [CylinderInfoService ]
})
export class CylinderInfoComponent implements OnInit {

    constructor(private _service: CylinderInfoService, @Inject(DATE_LOCALIZATION) private cn,
        private fb: FormBuilder) {
    }
    selectedproperty: string;

    property: SelectItem[] = [
        { label: '自有', value: 'own' },
        { label: '非自有', value: 'other' },
    ];
    selectedProperty: string;

    infoForm: FormGroup;
    submitted: boolean;

    // 气瓶录入数据
    cylinderInfo: {
        cylinderNumber: string,
        cylinder: string,
        propertyRightNature: string,
        propertyRightUnit: string,
        manufactureName: string,
        stopDate: string,
        productionDate: string,
        scrapDate: string,
        equipmentVarieties: string,
        fillingMedia: string,
        model: string,
        volume: string,
        weight: string,
        designWallThickness: string,
        waterPressureTest: string,
        nominalWorkingPressure: string,
        lastTestUnit: string,
        inspectionNumber: string,
        lastTestDate: string,
        nextTestDate: string,
        cylinderImage: string,
    } = {
        cylinderNumber: '',
        cylinder: '',
        propertyRightNature: '',
        propertyRightUnit: '',
        manufactureName: '',
        stopDate: '',
        productionDate: '',
        scrapDate: '',
        equipmentVarieties: '',
        fillingMedia: '',
        model: '',
        volume: '',
        weight: '',
        designWallThickness: '',
        waterPressureTest: '',
        nominalWorkingPressure: '',
        lastTestUnit: '',
        inspectionNumber: '',
        lastTestDate: '',
        nextTestDate: '',
        cylinderImage: '',
    };
    manufactureName: SelectItem[] = [];
    equipmentVarieties: SelectItem[] = [
        { label: '液化石油气钢瓶', value: 'gas' },
        { label: '液化石油气钢瓶', value: 'gas1' },
    ];
    fillingMedia: SelectItem[] = [];
    model: SelectItem[] = [];
    lastTestUnit: SelectItem[] = [];



    uploadedFiles: any[] = [];

    onUpload(event) {
        for (const file of event.files) {
            this.uploadedFiles.push(file);
        }
    }
    onSubmit(value: string) {
        this.submitted = true;
    }


    ngOnInit() {
        this.selectedProperty = 'own';
        this.creatDetail();
    }
    creatDetail() {
        this.infoForm = this.fb.group({
            'gasNumber': new FormControl('', Validators.required),
        });
    }
}
