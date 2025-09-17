import { Injectable } from '@nestjs/common';
import { CreateSiswaDto } from './dto/create-siswa.dto';
import { UpdateSiswaDto } from './dto/update-siswa.dto';


@Injectable()
export class SiswaService {
  private siswa: CreateSiswaDto[] = [];

  create(createSiswaDto: CreateSiswaDto) {
    this.siswa.push(createSiswaDto);
    return this.siswa;
  }

  findAll(): CreateSiswaDto[] {
    return this.siswa;
  }

  findOne(nisn: string) {
    return this.siswa.find((siswa) => siswa.nisn === nisn);
  }

  update(nisn: string, updateSiswaDto: UpdateSiswaDto) {
    const i = this.siswa.findIndex((siswa) => siswa.nisn === nisn);
    if (updateSiswaDto.nama !== undefined) {
      this.siswa[i].nama = updateSiswaDto.nama;
    }
    if (updateSiswaDto.alamat !== undefined) {
      this.siswa[i].alamat = updateSiswaDto.alamat;
    }
    if (updateSiswaDto.umur !== undefined) {
      this.siswa[i].umur = updateSiswaDto.umur;
    }
    return this.siswa;
  }

  remove(nisn: string) {
    const i = this.siswa.findIndex((siswa) => siswa.nisn === nisn);
    this.siswa.splice(i, 1)
    return this.siswa;
  }
}
