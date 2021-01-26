package lt.verbus.backend.controller;

import lt.verbus.backend.controller.dto.ProductDTO;
import lt.verbus.backend.service.ProductService;
import io.swagger.annotations.Api;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/products")
@Api(tags = "This controller is responsible for product interactions")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/{id}")
    public ProductDTO getProduct(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    @GetMapping
    public List<ProductDTO> getAllProducts() {
        return productService.getAllProducts();
        //TODO: implement
    }

    @PatchMapping("/{id}")
    public ProductDTO updateProductDescription(@PathVariable long id, @RequestBody ProductDTO productDTO) {
        return productService.updateProductDescription(id, productDTO);
    }

    @PostMapping
    public ResponseEntity<ProductDTO> addProduct(@RequestBody @Valid ProductDTO productDTO) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(productService.createProduct(productDTO));
    }

    @PutMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ProductDTO updateProduct(@RequestBody @Valid ProductDTO productDTO) {
        return productService.updateProduct(productDTO);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable long id) {
        productService.deleteProduct(id);
    }


}
