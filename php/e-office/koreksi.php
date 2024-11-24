<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- bootstrap 4 cdn  -->
    <!-- <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"> -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
        <style>
            
        </style>
</head>

<body>
    <?php 

    if($_POST){
        $id = [];
        foreach ($_POST['sebelum'] as $item) {
            $id[] = $item;
        }
        foreach ($_POST['menjadi'] as $items) {
            $id[] = $items;
        }

        $in = '('. implode(',', $id) .')';
        var_dump($in);
    }


    ?>
    <form action="/keuangan/rkakl/mapper/save" method="POST" class="form-horizontal" id="renkasSaveForm">
        <input type="hidden" class="tipe_simpan" id="tipe_simpan" name="tipe_simpan" value="">
        <input type="hidden" id="kode_filter" name="kode_filter" value="1572.ABD.001.051.A.521211">
        <div class="col-lg-12">&nbsp;</div>
        <div class="col-lg-12" style="overflow-y:scroll;max-height:400px;">
            <div class="col-lg-6">
                <table class="table table-bordered" id="table-current" tabindex="1">
                    <thead>
                        <tr style="background-color:#ddd" x-selectable="1" x-draggable="1">
                            <th colspan="4" class="text-center col-xs-12">VERSI 1</th>
                        </tr>
                        <tr style="background-color:#efefef" x-selectable="1" x-draggable="1">
                            <th class="col-xs-1">Id</th>
                            <th class="col-xs-3">Kode</th>
                            <th class="col-xs-6">Item</th>
                            <th class="col-xs-2">Nominal</th>
                        </tr>
                    </thead>
                    <tbody class="connectedSortable">
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                533125 <br>
                                <button type="button" class="btn btn-primary btn-xs btnExit"><i
                                        class="fa fa-arrow-down"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.1_01.1 </td>
                            <td colspan="2" class="drag_handle col-xs-8" style="font-weight:bold;">Honor Panitia Daerah
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597706 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.2_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.2">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Penanggungjawab</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">8,400,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597707 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.3_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.3">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Ketua</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">7,800,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597708 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.4_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.4">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Sekretaris</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">6,000,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597709 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.5_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.5">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Anggota</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">
                                192,000,000</td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597710 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.6_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.5">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Anggota baru</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">
                                192,000,000</td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center" style="background-color:none;color:#000;"
                                nowrap="">
                                597711 <br>
                                <button type="button" class="btn btn-danger btn-xs btnDel"><i
                                        class="fa fa-minus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.7_01 <input type="hidden" name="rkakl[1][]"
                                    value="1574.ABD.001.051.B.521213.5">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Anggota lama</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">
                                192,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-6">
                <table class="table table-bordered" id="table-revisi" tabindex="2">
                    <thead>
                        <tr style="background-color:#ddd" x-selectable="1" x-draggable="1">
                            <th colspan="4" class="text-center col-xs-12">REVISI 2</th>
                        </tr>
                        <tr style="background-color:#efefef" x-selectable="1" x-draggable="1">
                            <th class="col-xs-1">Id</th>
                            <th class="col-xs-3">Kode</th>
                            <th class="col-xs-6">Item</th>
                            <th class="col-xs-2">Nominal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                610349 <br>
                                <button type="button" class="btn btn-primary btn-xs btnAdd"><i
                                        class="fa fa-plus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.1_01.1 </td>
                            <td colspan="2" class="drag_handle col-xs-8" style="font-weight:bold;">TIM</td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                610350 <button type="button" class="btn btn-primary btn-xs btnAdd"><i
                                        class="fa fa-plus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.2_01 <input type="hidden" name="rkakl[2][]"
                                    value="1574.ABD.001.051.B.521213.2">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Penanggungjawab</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">8,400,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                610351 <button type="button" class="btn btn-primary btn-xs btnAdd"><i
                                        class="fa fa-plus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.3_01 <input type="hidden" name="rkakl[2][]"
                                    value="1574.ABD.001.051.B.521213.3">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Ketua</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">7,800,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                610352 <button type="button" class="btn btn-primary btn-xs btnAdd"><i
                                        class="fa fa-plus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.4_01 <input type="hidden" name="rkakl[2][]"
                                    value="1574.ABD.001.051.B.521213.4">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Sekretaris</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">6,000,000
                            </td>
                        </tr>
                        <tr x-selectable="1" x-draggable="1">
                            <td class="drag_handle col-xs-1 text-center">
                                610353 <button type="button" class="btn btn-primary btn-xs btnAdd"><i
                                        class="fa fa-plus"></i></button>
                            </td>
                            <td class="drag_handle col-xs-3" style="font-weight:bold;">
                                1574.ABD.001.051.B.521213.5_01 <input type="hidden" name="rkakl[2][]"
                                    value="1574.ABD.001.051.B.521213.5">
                            </td>
                            <td class="drag_handle col-xs-6" style="font-weight:bold;">Anggota</td>
                            <td class="drag_handle col-xs-2" align="right" style="font-weight:bold;color:red;">
                                192,000,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-lg-12">&nbsp;</div>
        <div class="col-lg-12">&nbsp;</div>
        <div class="col-lg-12" style="overflow-y:scroll;max-height:200px;">
            <div class="col-lg-6">
                <table class="table table-bordered" id="table-current-del">
                    <thead>
                        <tr style="background-color:#ddd">
                            <th colspan="4" class="text-center col-xs-12">RENKAS ITEM DIHAPUS / DISIMPAN DI VERSI 1</th>
                        </tr>
                        <tr style="background-color:#efefef">
                            <th class="col-xs-1">Id</th>
                            <th class="col-xs-3">Kode</th>
                            <th class="col-xs-6">Item</th>
                            <th class="col-xs-2">Nominal</th>
                        </tr>
                    </thead>
                    <tbody class="connectedSortable">

                    </tbody>
                </table>
            </div>
            <div class="col-lg-6">
                <table class="table table-bordered" id="table-revisi-add">
                    <thead>
                        <tr style="background-color:#ddd">
                            <th colspan="4" class="text-center col-xs-12">ITEM BARU DI REVISI 2</th>
                        </tr>
                        <tr style="background-color:#efefef">
                            <th class="col-xs-1">Id</th>
                            <th class="col-xs-3">Kode</th>
                            <th class="col-xs-6">Item</th>
                            <th class="col-xs-2">Nominal</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="col-lg-12">&nbsp;</div>
        <div class="col-lg-12 text-center">
            <button type="button" class="btn btn-success" id="koreksi"><span class="loader2"></span>Koreksi</button>
            <button type="submit" class="btn btn-danger saver" value="hapus_item"><span class="loader2"></span>Hapus
                Item Tak Terpakai</button>
            <button type="submit" class="btn btn-warning saver" value="tambah"><span class="loader2"></span>Tambah Semua
                Item Baru</button>
            <!-- <button type="submit" class="btn btn-success saver" value="simpan_sama"><span class="loader2"></span>Simpan Nilai Kolom Sama</button> -->
            <button type="submit" class="btn btn-primary saver" value="simpan"><span
                    class="loader2"></span>Simpan</button>
        </div>
    </form>

    <!-- bootstrap modal hide -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <form method="POST">
                <div class="modal-header" style="display: flex; justify-content: space-between;">
                    <h5 class="modal-title" id="exampleModalLabel">Koreksi</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                        <div class="row">
                            <div class="col-xs-6">
                                Sebelum
                            </div>
                            <div class="col-xs-6">
                                Menjadi
                            </div>
                        </div>
                        <div id="koreksi-data">
                        </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button class="btn btn-primary">Save changes</button>
                </div>
                </form>
            </div>
        </div>
    </div>

    <!-- jquery 3.6 cdn -->
    <script src="https://code.jquery.com/jquery-3.6.0.js"
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
    <!-- bootstrap js cdn -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"></script>
    <script>
        $('#koreksi').click(function (e) {
            var current = [];
            var revisi = [];
            $('#table-current tbody tr').each(function (i, v) {
                current.push({
                    id: $(v).find('td:eq(0)').text().trim(),
                    kode: $(v).find('td:eq(1)').text().trim(),
                    item: $(v).find('td:eq(2)').text().trim(),
                    nominal: $(v).find('td:eq(3)').text().trim()
                })
            });
            // console.log(current);

            $('#table-revisi tbody tr').each(function (i, v) {
                revisi.push({
                    id: $(v).find('td:eq(0)').text().trim(),
                    kode: $(v).find('td:eq(1)').text().trim(),
                    item: $(v).find('td:eq(2)').text().trim(),
                    nominal: $(v).find('td:eq(3)').text().trim()
                })
            });

            // console.log(1);
            // array column kode
            var current_kode = [];
            var revisi_kode = [];
            $.each(current, function (i, v) {
                current_kode.push(v.kode);
            });
            $.each(revisi, function (i, v) {
                revisi_kode.push(v.kode);
            });

            // console.log(current_kode);
            // // compare kode
            var kode_beda = [];
            $.each(current, function (i, v) {
                if ($.inArray(v.kode, revisi_kode) == -1) {
                    delete current[i];
                    kode_beda.push(v);
                }
            });

            var option = '';
            $.each(current, function (i, v) {
                if (v) {
                    option += '<option value="' + v.id + '" data-kode="' + v.kode + '" data-nominal="' + v.nominal + '">' + v.item + '</option>';
                }
            });

            var html = '';
            // loop kode beda
            $.each(kode_beda, function (i, v) {
                console.log(v);
                html += `<div class="row mt-3">
                            <div class='col-xs-6'>
                                <select name="sebelum[]" type='text' class='form-control' id='kode_sebelum' readonly
                                data-nominal='${v.nominal}' data-kode='${v.kode}' style="pointer-events: none;">
                                    <option value="${v.id}">${v.item}</option>
                                </select>
                            </div>
                            <div class='col-xs-6'>
                                <select name="menjadi[]" type='text' class='form-control' id='kode_menjadi'>`;
                html += option;
                html += `</select >
                            </div >
                        </div >`;
            });

            $('#koreksi-data').html(html);

            $('#exampleModal').modal('show');
        })
    </script>
</body>

</html>