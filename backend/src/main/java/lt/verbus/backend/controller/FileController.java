package lt.verbus.backend.controller;

import lt.verbus.backend.entity.UploadedFile;
import lt.verbus.backend.service.FileService;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@RestController
@RequestMapping("/file")
public class FileController {

    private final FileService fileService;

    public FileController(FileService fileService) {
        this.fileService = fileService;
    }

    @GetMapping
    private List<String> getAllFiles() {
        return List.of("failas", "failas2");
    }

    @PostMapping
    public UploadedFile uploadFile(@RequestParam("document") MultipartFile file) {
        return fileService.uploadFile(file);
    }


    @GetMapping("/{fileName}")
    public ResponseEntity<Resource> getFile(@PathVariable String fileName) {
        Resource file = fileService.getFile(fileName);
        MediaType fileMediaType = fileService.getMediaTypeByResource(file);
        return ResponseEntity.ok()
                .contentType(fileMediaType)
                .body(file);

        //        return fileService.getFile(fileName)
    }


    @PutMapping("/{name2}")
    public String updateFile(@PathVariable String name2) {
        return name2;
    }


}
